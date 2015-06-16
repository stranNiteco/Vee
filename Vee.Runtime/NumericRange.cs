using System.Collections;
using System.Collections.Generic;

namespace Vee.Runtime
{
    public class NumericRange : IEnumerable<double>
    {
        public NumericRange(double from, double to, double incr = 1d)
        {
            From = from;
            To = to;
            Incr = incr;
        }

        public double Incr { get; }

        public double To { get; }

        public double From { get; }

        public IEnumerator<double> GetEnumerator()
        {
            for (var i = From; ; i += Incr)
            {
                if (Incr < 0 ? i < To : i > To)
                {
                    yield return To;
                    yield break;
                }
                else
                {
                    yield return i;
                }
            }
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return GetEnumerator();
        }
    }
}