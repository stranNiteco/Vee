using System;
using System.Collections;
using System.Collections.Generic;

namespace Vee.Runtime
{
    public class DatesRange : IEnumerable<DateTimeOffset>
    {
        public DatesRange(DateTimeOffset from, DateTimeOffset to, double incr)
        {
            From = @from;
            To = to;
            Incr = incr;
        }

        public DateTimeOffset From { get; }

        public DateTimeOffset To { get; }

        public double Incr { get; }

        public IEnumerator<DateTimeOffset> GetEnumerator()
        {
            for (var date = From; ; date = date.AddDays(Incr))
            {
                if (Incr < 0 ? date < To : date > To)
                {
                    yield return To;
                    yield break;
                }
                else
                {
                    yield return date;
                }
            }
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return GetEnumerator();
        }
    }
}