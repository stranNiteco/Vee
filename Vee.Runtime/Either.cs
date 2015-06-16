using System;

namespace Vee.Runtime
{
    public abstract class Either<T>
    {
        private Either() { }

        public abstract TResult Match<TResult>(Func<T, TResult> some, Func<string, TResult> nothing);

        private sealed class Value : Either<T>
        {
            private readonly T _value;

            public Value(T value)
            {
                _value = value;
            }

            public override TResult Match<TResult>(Func<T, TResult> some, Func<string, TResult> nothing)
            {
                return some(_value);
            }
        }

        private sealed class Error : Either<T>
        {
            private readonly string _error;
            public Error(string error)
            {
                _error = error;
            }

            public override TResult Match<TResult>(Func<T, TResult> some, Func<string, TResult> nothing)
            {
                return nothing(_error);
            }
        }

        // unit: A -> (A+E)
        public static Either<T> Unit(T val)
        {
            return new Value(val);
        }

        // unit: E -> (A+E)
        public static Either<T> Unit(string error)
        {
            return new Error(error);
        }

        // fmap: A->B -> ((A+E) -> (B+E))
        public static Func<Either<T1>, Either<T2>> Lift<T1, T2>(Func<T1, T2> map)
        {
            //map >> Either<T2>.Val
            return e1 => e1.Match(val => Either<T2>.Unit(map(val)), Either<T2>.Unit);
        }

        // join: ((A+E)+E) -> (A+E)
        public static Either<T> Join(Either<Either<T>> wrap)
        {
            return wrap.Match(inner => inner.Match(Unit, Unit), Unit);
        }

        // bind: (A+E) -> (A -> (B+E)) -> (B+E)
        public static Either<T2> Bind<T1, T2>(Either<T1> e1, Func<T1, Either<T2>> map)
        {
            return e1.Match(map, Either<T2>.Unit);
        }
    }
}
