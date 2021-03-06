﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Vee.Parser;

namespace Demo.ViewModel
{
    public class ParserResult
    {
        public string CompiledString { get; set; }
        public IEnumerable<string> Variables { get; set; }
        public Node RootNode { get; set; }
    }
}
