//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     ANTLR Version: 4.5
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

// Generated from D:/antlr/csharp/Vee/Vee\Vee.g4 by ANTLR 4.5

// Unreachable code detected
#pragma warning disable 0162
// The variable '...' is assigned but its value is never used
#pragma warning disable 0219
// Missing XML comment for publicly visible type or member '...'
#pragma warning disable 1591

namespace Vee {
using System;
using Antlr4.Runtime;
using Antlr4.Runtime.Atn;
using Antlr4.Runtime.Misc;
using DFA = Antlr4.Runtime.Dfa.DFA;

[System.CodeDom.Compiler.GeneratedCode("ANTLR", "4.5")]
[System.CLSCompliant(false)]
public partial class VeeLexer : Lexer {
	public const int
		LBracket=1, RBracket=2, LBrace=3, RBrace=4, LParen=5, RParen=6, Comma=7, 
		Quiz=8, Colon=9, Hash=10, Range=11, Arrow=12, Pow=13, Multiply=14, Divide=15, 
		Modulo=16, Plus=17, Minus=18, Eq=19, Eeq=20, Deq=21, Neq=22, Lt=23, Gt=24, 
		Lte=25, Gte=26, Xor=27, And=28, Or=29, Compl=30, RPipe=31, Dot=32, Combine=33, 
		AndAlso=34, OrElse=35, Not=36, Let=37, Return=38, If=39, Try=40, Then=41, 
		Else=42, True=43, False=44, Date=45, DateTime=46, Number=47, Name=48, 
		String=49, WS=50;
	public static string[] modeNames = {
		"DEFAULT_MODE"
	};

	public static readonly string[] ruleNames = {
		"LBracket", "RBracket", "LBrace", "RBrace", "LParen", "RParen", "Comma", 
		"Quiz", "Colon", "Hash", "Range", "Arrow", "Pow", "Multiply", "Divide", 
		"Modulo", "Plus", "Minus", "Eq", "Eeq", "Deq", "Neq", "Lt", "Gt", "Lte", 
		"Gte", "Xor", "And", "Or", "Compl", "RPipe", "Dot", "Combine", "AndAlso", 
		"OrElse", "Not", "Let", "Return", "If", "Try", "Then", "Else", "True", 
		"False", "Date", "DateTime", "Number", "Name", "String", "WS", "Time", 
		"TimeZone", "TwoDigits", "NaN", "Infinity", "NormalNumber", "Digit", "Quote", 
		"Esc", "Unicode", "Hex", "Interpolation", "Identifier"
	};


	public VeeLexer(ICharStream input)
		: base(input)
	{
		Interpreter = new LexerATNSimulator(this,_ATN);
	}

	private static readonly string[] _LiteralNames = {
		null, "'['", "']'", "'{'", "'}'", "'('", "')'", "','", "'?'", "':'", "'#'", 
		"'..'", "'->'", "'**'", "'*'", "'/'", "'%'", "'+'", "'-'", "'='", "'~='", 
		"'=='", "'!='", "'<'", "'>'", "'<='", "'>='", "'^'", "'&'", "'|'", "'~'", 
		"'|>'", "'.'", "'::'", "'and'", "'or'", "'not'", "'let'", "'return'", 
		"'if'", "'try'", "'then'", "'else'", "'true'", "'false'"
	};
	private static readonly string[] _SymbolicNames = {
		null, "LBracket", "RBracket", "LBrace", "RBrace", "LParen", "RParen", 
		"Comma", "Quiz", "Colon", "Hash", "Range", "Arrow", "Pow", "Multiply", 
		"Divide", "Modulo", "Plus", "Minus", "Eq", "Eeq", "Deq", "Neq", "Lt", 
		"Gt", "Lte", "Gte", "Xor", "And", "Or", "Compl", "RPipe", "Dot", "Combine", 
		"AndAlso", "OrElse", "Not", "Let", "Return", "If", "Try", "Then", "Else", 
		"True", "False", "Date", "DateTime", "Number", "Name", "String", "WS"
	};
	public static readonly IVocabulary DefaultVocabulary = new Vocabulary(_LiteralNames, _SymbolicNames);

	[NotNull]
	public override IVocabulary Vocabulary
	{
		get
		{
			return DefaultVocabulary;
		}
	}

	public override string GrammarFileName { get { return "Vee.g4"; } }

	public override string[] RuleNames { get { return ruleNames; } }

	public override string[] ModeNames { get { return modeNames; } }

	public override string SerializedAtn { get { return _serializedATN; } }

	public static readonly string _serializedATN =
		"\x3\x430\xD6D1\x8206\xAD2D\x4417\xAEF1\x8D80\xAADD\x2\x34\x171\b\x1\x4"+
		"\x2\t\x2\x4\x3\t\x3\x4\x4\t\x4\x4\x5\t\x5\x4\x6\t\x6\x4\a\t\a\x4\b\t\b"+
		"\x4\t\t\t\x4\n\t\n\x4\v\t\v\x4\f\t\f\x4\r\t\r\x4\xE\t\xE\x4\xF\t\xF\x4"+
		"\x10\t\x10\x4\x11\t\x11\x4\x12\t\x12\x4\x13\t\x13\x4\x14\t\x14\x4\x15"+
		"\t\x15\x4\x16\t\x16\x4\x17\t\x17\x4\x18\t\x18\x4\x19\t\x19\x4\x1A\t\x1A"+
		"\x4\x1B\t\x1B\x4\x1C\t\x1C\x4\x1D\t\x1D\x4\x1E\t\x1E\x4\x1F\t\x1F\x4 "+
		"\t \x4!\t!\x4\"\t\"\x4#\t#\x4$\t$\x4%\t%\x4&\t&\x4\'\t\'\x4(\t(\x4)\t"+
		")\x4*\t*\x4+\t+\x4,\t,\x4-\t-\x4.\t.\x4/\t/\x4\x30\t\x30\x4\x31\t\x31"+
		"\x4\x32\t\x32\x4\x33\t\x33\x4\x34\t\x34\x4\x35\t\x35\x4\x36\t\x36\x4\x37"+
		"\t\x37\x4\x38\t\x38\x4\x39\t\x39\x4:\t:\x4;\t;\x4<\t<\x4=\t=\x4>\t>\x4"+
		"?\t?\x4@\t@\x3\x2\x3\x2\x3\x3\x3\x3\x3\x4\x3\x4\x3\x5\x3\x5\x3\x6\x3\x6"+
		"\x3\a\x3\a\x3\b\x3\b\x3\t\x3\t\x3\n\x3\n\x3\v\x3\v\x3\f\x3\f\x3\f\x3\r"+
		"\x3\r\x3\r\x3\xE\x3\xE\x3\xE\x3\xF\x3\xF\x3\x10\x3\x10\x3\x11\x3\x11\x3"+
		"\x12\x3\x12\x3\x13\x3\x13\x3\x14\x3\x14\x3\x15\x3\x15\x3\x15\x3\x16\x3"+
		"\x16\x3\x16\x3\x17\x3\x17\x3\x17\x3\x18\x3\x18\x3\x19\x3\x19\x3\x1A\x3"+
		"\x1A\x3\x1A\x3\x1B\x3\x1B\x3\x1B\x3\x1C\x3\x1C\x3\x1D\x3\x1D\x3\x1E\x3"+
		"\x1E\x3\x1F\x3\x1F\x3 \x3 \x3 \x3!\x3!\x3\"\x3\"\x3\"\x3#\x3#\x3#\x3#"+
		"\x3$\x3$\x3$\x3%\x3%\x3%\x3%\x3&\x3&\x3&\x3&\x3\'\x3\'\x3\'\x3\'\x3\'"+
		"\x3\'\x3\'\x3(\x3(\x3(\x3)\x3)\x3)\x3)\x3*\x3*\x3*\x3*\x3*\x3+\x3+\x3"+
		"+\x3+\x3+\x3,\x3,\x3,\x3,\x3,\x3-\x3-\x3-\x3-\x3-\x3-\x3.\x3.\x3.\x3."+
		"\x3.\x3.\x3.\x3/\x3/\x3/\x3/\x3/\x5/\x10C\n/\x3/\x3/\x3\x30\x3\x30\x3"+
		"\x30\x5\x30\x113\n\x30\x3\x30\x3\x30\x5\x30\x117\n\x30\x3\x31\x3\x31\x3"+
		"\x32\x3\x32\x3\x32\a\x32\x11E\n\x32\f\x32\xE\x32\x121\v\x32\x3\x32\x3"+
		"\x32\x3\x33\x3\x33\x3\x33\x3\x33\x3\x34\x3\x34\x3\x34\x3\x34\x3\x34\x3"+
		"\x34\x3\x34\x3\x35\x3\x35\x3\x35\x3\x35\x3\x35\x3\x35\x5\x35\x136\n\x35"+
		"\x3\x36\x3\x36\x3\x36\x3\x37\x3\x37\x3\x37\x3\x37\x3\x38\x3\x38\x3\x38"+
		"\x3\x38\x3\x38\x3\x38\x3\x38\x3\x38\x3\x38\x3\x39\x6\x39\x149\n\x39\r"+
		"\x39\xE\x39\x14A\x3\x39\x3\x39\x6\x39\x14F\n\x39\r\x39\xE\x39\x150\x5"+
		"\x39\x153\n\x39\x3:\x3:\x3;\x3;\x3<\x3<\x3<\x3<\x5<\x15D\n<\x3=\x3=\x3"+
		"=\x3=\x3=\x3=\x3>\x3>\x3?\x3?\x3?\x3?\x3@\x3@\a@\x16D\n@\f@\xE@\x170\v"+
		"@\x2\x2\x41\x3\x3\x5\x4\a\x5\t\x6\v\a\r\b\xF\t\x11\n\x13\v\x15\f\x17\r"+
		"\x19\xE\x1B\xF\x1D\x10\x1F\x11!\x12#\x13%\x14\'\x15)\x16+\x17-\x18/\x19"+
		"\x31\x1A\x33\x1B\x35\x1C\x37\x1D\x39\x1E;\x1F= ?!\x41\"\x43#\x45$G%I&"+
		"K\'M(O)Q*S+U,W-Y.[/]\x30_\x31\x61\x32\x63\x33\x65\x34g\x2i\x2k\x2m\x2"+
		"o\x2q\x2s\x2u\x2w\x2y\x2{\x2}\x2\x7F\x2\x3\x2\t\x4\x2$$^^\x5\x2\v\f\xF"+
		"\xF\"\"\x4\x2--//\x3\x2\x32;\x5\x2\x32;\x43H\x63h\x6\x2&&\x43\\\x61\x61"+
		"\x63|\a\x2&&\x32;\x43\\\x61\x61\x63|\x171\x2\x3\x3\x2\x2\x2\x2\x5\x3\x2"+
		"\x2\x2\x2\a\x3\x2\x2\x2\x2\t\x3\x2\x2\x2\x2\v\x3\x2\x2\x2\x2\r\x3\x2\x2"+
		"\x2\x2\xF\x3\x2\x2\x2\x2\x11\x3\x2\x2\x2\x2\x13\x3\x2\x2\x2\x2\x15\x3"+
		"\x2\x2\x2\x2\x17\x3\x2\x2\x2\x2\x19\x3\x2\x2\x2\x2\x1B\x3\x2\x2\x2\x2"+
		"\x1D\x3\x2\x2\x2\x2\x1F\x3\x2\x2\x2\x2!\x3\x2\x2\x2\x2#\x3\x2\x2\x2\x2"+
		"%\x3\x2\x2\x2\x2\'\x3\x2\x2\x2\x2)\x3\x2\x2\x2\x2+\x3\x2\x2\x2\x2-\x3"+
		"\x2\x2\x2\x2/\x3\x2\x2\x2\x2\x31\x3\x2\x2\x2\x2\x33\x3\x2\x2\x2\x2\x35"+
		"\x3\x2\x2\x2\x2\x37\x3\x2\x2\x2\x2\x39\x3\x2\x2\x2\x2;\x3\x2\x2\x2\x2"+
		"=\x3\x2\x2\x2\x2?\x3\x2\x2\x2\x2\x41\x3\x2\x2\x2\x2\x43\x3\x2\x2\x2\x2"+
		"\x45\x3\x2\x2\x2\x2G\x3\x2\x2\x2\x2I\x3\x2\x2\x2\x2K\x3\x2\x2\x2\x2M\x3"+
		"\x2\x2\x2\x2O\x3\x2\x2\x2\x2Q\x3\x2\x2\x2\x2S\x3\x2\x2\x2\x2U\x3\x2\x2"+
		"\x2\x2W\x3\x2\x2\x2\x2Y\x3\x2\x2\x2\x2[\x3\x2\x2\x2\x2]\x3\x2\x2\x2\x2"+
		"_\x3\x2\x2\x2\x2\x61\x3\x2\x2\x2\x2\x63\x3\x2\x2\x2\x2\x65\x3\x2\x2\x2"+
		"\x3\x81\x3\x2\x2\x2\x5\x83\x3\x2\x2\x2\a\x85\x3\x2\x2\x2\t\x87\x3\x2\x2"+
		"\x2\v\x89\x3\x2\x2\x2\r\x8B\x3\x2\x2\x2\xF\x8D\x3\x2\x2\x2\x11\x8F\x3"+
		"\x2\x2\x2\x13\x91\x3\x2\x2\x2\x15\x93\x3\x2\x2\x2\x17\x95\x3\x2\x2\x2"+
		"\x19\x98\x3\x2\x2\x2\x1B\x9B\x3\x2\x2\x2\x1D\x9E\x3\x2\x2\x2\x1F\xA0\x3"+
		"\x2\x2\x2!\xA2\x3\x2\x2\x2#\xA4\x3\x2\x2\x2%\xA6\x3\x2\x2\x2\'\xA8\x3"+
		"\x2\x2\x2)\xAA\x3\x2\x2\x2+\xAD\x3\x2\x2\x2-\xB0\x3\x2\x2\x2/\xB3\x3\x2"+
		"\x2\x2\x31\xB5\x3\x2\x2\x2\x33\xB7\x3\x2\x2\x2\x35\xBA\x3\x2\x2\x2\x37"+
		"\xBD\x3\x2\x2\x2\x39\xBF\x3\x2\x2\x2;\xC1\x3\x2\x2\x2=\xC3\x3\x2\x2\x2"+
		"?\xC5\x3\x2\x2\x2\x41\xC8\x3\x2\x2\x2\x43\xCA\x3\x2\x2\x2\x45\xCD\x3\x2"+
		"\x2\x2G\xD1\x3\x2\x2\x2I\xD4\x3\x2\x2\x2K\xD8\x3\x2\x2\x2M\xDC\x3\x2\x2"+
		"\x2O\xE3\x3\x2\x2\x2Q\xE6\x3\x2\x2\x2S\xEA\x3\x2\x2\x2U\xEF\x3\x2\x2\x2"+
		"W\xF4\x3\x2\x2\x2Y\xF9\x3\x2\x2\x2[\xFF\x3\x2\x2\x2]\x106\x3\x2\x2\x2"+
		"_\x116\x3\x2\x2\x2\x61\x118\x3\x2\x2\x2\x63\x11A\x3\x2\x2\x2\x65\x124"+
		"\x3\x2\x2\x2g\x128\x3\x2\x2\x2i\x135\x3\x2\x2\x2k\x137\x3\x2\x2\x2m\x13A"+
		"\x3\x2\x2\x2o\x13E\x3\x2\x2\x2q\x148\x3\x2\x2\x2s\x154\x3\x2\x2\x2u\x156"+
		"\x3\x2\x2\x2w\x158\x3\x2\x2\x2y\x15E\x3\x2\x2\x2{\x164\x3\x2\x2\x2}\x166"+
		"\x3\x2\x2\x2\x7F\x16A\x3\x2\x2\x2\x81\x82\a]\x2\x2\x82\x4\x3\x2\x2\x2"+
		"\x83\x84\a_\x2\x2\x84\x6\x3\x2\x2\x2\x85\x86\a}\x2\x2\x86\b\x3\x2\x2\x2"+
		"\x87\x88\a\x7F\x2\x2\x88\n\x3\x2\x2\x2\x89\x8A\a*\x2\x2\x8A\f\x3\x2\x2"+
		"\x2\x8B\x8C\a+\x2\x2\x8C\xE\x3\x2\x2\x2\x8D\x8E\a.\x2\x2\x8E\x10\x3\x2"+
		"\x2\x2\x8F\x90\a\x41\x2\x2\x90\x12\x3\x2\x2\x2\x91\x92\a<\x2\x2\x92\x14"+
		"\x3\x2\x2\x2\x93\x94\a%\x2\x2\x94\x16\x3\x2\x2\x2\x95\x96\a\x30\x2\x2"+
		"\x96\x97\a\x30\x2\x2\x97\x18\x3\x2\x2\x2\x98\x99\a/\x2\x2\x99\x9A\a@\x2"+
		"\x2\x9A\x1A\x3\x2\x2\x2\x9B\x9C\a,\x2\x2\x9C\x9D\a,\x2\x2\x9D\x1C\x3\x2"+
		"\x2\x2\x9E\x9F\a,\x2\x2\x9F\x1E\x3\x2\x2\x2\xA0\xA1\a\x31\x2\x2\xA1 \x3"+
		"\x2\x2\x2\xA2\xA3\a\'\x2\x2\xA3\"\x3\x2\x2\x2\xA4\xA5\a-\x2\x2\xA5$\x3"+
		"\x2\x2\x2\xA6\xA7\a/\x2\x2\xA7&\x3\x2\x2\x2\xA8\xA9\a?\x2\x2\xA9(\x3\x2"+
		"\x2\x2\xAA\xAB\a\x80\x2\x2\xAB\xAC\a?\x2\x2\xAC*\x3\x2\x2\x2\xAD\xAE\a"+
		"?\x2\x2\xAE\xAF\a?\x2\x2\xAF,\x3\x2\x2\x2\xB0\xB1\a#\x2\x2\xB1\xB2\a?"+
		"\x2\x2\xB2.\x3\x2\x2\x2\xB3\xB4\a>\x2\x2\xB4\x30\x3\x2\x2\x2\xB5\xB6\a"+
		"@\x2\x2\xB6\x32\x3\x2\x2\x2\xB7\xB8\a>\x2\x2\xB8\xB9\a?\x2\x2\xB9\x34"+
		"\x3\x2\x2\x2\xBA\xBB\a@\x2\x2\xBB\xBC\a?\x2\x2\xBC\x36\x3\x2\x2\x2\xBD"+
		"\xBE\a`\x2\x2\xBE\x38\x3\x2\x2\x2\xBF\xC0\a(\x2\x2\xC0:\x3\x2\x2\x2\xC1"+
		"\xC2\a~\x2\x2\xC2<\x3\x2\x2\x2\xC3\xC4\a\x80\x2\x2\xC4>\x3\x2\x2\x2\xC5"+
		"\xC6\a~\x2\x2\xC6\xC7\a@\x2\x2\xC7@\x3\x2\x2\x2\xC8\xC9\a\x30\x2\x2\xC9"+
		"\x42\x3\x2\x2\x2\xCA\xCB\a<\x2\x2\xCB\xCC\a<\x2\x2\xCC\x44\x3\x2\x2\x2"+
		"\xCD\xCE\a\x63\x2\x2\xCE\xCF\ap\x2\x2\xCF\xD0\a\x66\x2\x2\xD0\x46\x3\x2"+
		"\x2\x2\xD1\xD2\aq\x2\x2\xD2\xD3\at\x2\x2\xD3H\x3\x2\x2\x2\xD4\xD5\ap\x2"+
		"\x2\xD5\xD6\aq\x2\x2\xD6\xD7\av\x2\x2\xD7J\x3\x2\x2\x2\xD8\xD9\an\x2\x2"+
		"\xD9\xDA\ag\x2\x2\xDA\xDB\av\x2\x2\xDBL\x3\x2\x2\x2\xDC\xDD\at\x2\x2\xDD"+
		"\xDE\ag\x2\x2\xDE\xDF\av\x2\x2\xDF\xE0\aw\x2\x2\xE0\xE1\at\x2\x2\xE1\xE2"+
		"\ap\x2\x2\xE2N\x3\x2\x2\x2\xE3\xE4\ak\x2\x2\xE4\xE5\ah\x2\x2\xE5P\x3\x2"+
		"\x2\x2\xE6\xE7\av\x2\x2\xE7\xE8\at\x2\x2\xE8\xE9\a{\x2\x2\xE9R\x3\x2\x2"+
		"\x2\xEA\xEB\av\x2\x2\xEB\xEC\aj\x2\x2\xEC\xED\ag\x2\x2\xED\xEE\ap\x2\x2"+
		"\xEET\x3\x2\x2\x2\xEF\xF0\ag\x2\x2\xF0\xF1\an\x2\x2\xF1\xF2\au\x2\x2\xF2"+
		"\xF3\ag\x2\x2\xF3V\x3\x2\x2\x2\xF4\xF5\av\x2\x2\xF5\xF6\at\x2\x2\xF6\xF7"+
		"\aw\x2\x2\xF7\xF8\ag\x2\x2\xF8X\x3\x2\x2\x2\xF9\xFA\ah\x2\x2\xFA\xFB\a"+
		"\x63\x2\x2\xFB\xFC\an\x2\x2\xFC\xFD\au\x2\x2\xFD\xFE\ag\x2\x2\xFEZ\x3"+
		"\x2\x2\x2\xFF\x100\x5k\x36\x2\x100\x101\x5k\x36\x2\x101\x102\x5%\x13\x2"+
		"\x102\x103\x5k\x36\x2\x103\x104\x5%\x13\x2\x104\x105\x5k\x36\x2\x105\\"+
		"\x3\x2\x2\x2\x106\x107\x5\x15\v\x2\x107\x10B\x5[.\x2\x108\x109\x5g\x34"+
		"\x2\x109\x10A\x5i\x35\x2\x10A\x10C\x3\x2\x2\x2\x10B\x108\x3\x2\x2\x2\x10B"+
		"\x10C\x3\x2\x2\x2\x10C\x10D\x3\x2\x2\x2\x10D\x10E\x5\x15\v\x2\x10E^\x3"+
		"\x2\x2\x2\x10F\x117\x5m\x37\x2\x110\x113\x5#\x12\x2\x111\x113\x5%\x13"+
		"\x2\x112\x110\x3\x2\x2\x2\x112\x111\x3\x2\x2\x2\x112\x113\x3\x2\x2\x2"+
		"\x113\x114\x3\x2\x2\x2\x114\x117\x5o\x38\x2\x115\x117\x5q\x39\x2\x116"+
		"\x10F\x3\x2\x2\x2\x116\x112\x3\x2\x2\x2\x116\x115\x3\x2\x2\x2\x117`\x3"+
		"\x2\x2\x2\x118\x119\x5\x7F@\x2\x119\x62\x3\x2\x2\x2\x11A\x11F\x5u;\x2"+
		"\x11B\x11E\x5w<\x2\x11C\x11E\n\x2\x2\x2\x11D\x11B\x3\x2\x2\x2\x11D\x11C"+
		"\x3\x2\x2\x2\x11E\x121\x3\x2\x2\x2\x11F\x11D\x3\x2\x2\x2\x11F\x120\x3"+
		"\x2\x2\x2\x120\x122\x3\x2\x2\x2\x121\x11F\x3\x2\x2\x2\x122\x123\x5u;\x2"+
		"\x123\x64\x3\x2\x2\x2\x124\x125\t\x3\x2\x2\x125\x126\x3\x2\x2\x2\x126"+
		"\x127\b\x33\x2\x2\x127\x66\x3\x2\x2\x2\x128\x129\a\"\x2\x2\x129\x12A\x5"+
		"k\x36\x2\x12A\x12B\x5\x13\n\x2\x12B\x12C\x5k\x36\x2\x12C\x12D\x5\x13\n"+
		"\x2\x12D\x12E\x5k\x36\x2\x12Eh\x3\x2\x2\x2\x12F\x130\t\x4\x2\x2\x130\x131"+
		"\x5k\x36\x2\x131\x132\x5\x13\n\x2\x132\x133\x5k\x36\x2\x133\x136\x3\x2"+
		"\x2\x2\x134\x136\a\\\x2\x2\x135\x12F\x3\x2\x2\x2\x135\x134\x3\x2\x2\x2"+
		"\x136j\x3\x2\x2\x2\x137\x138\x5s:\x2\x138\x139\x5s:\x2\x139l\x3\x2\x2"+
		"\x2\x13A\x13B\aP\x2\x2\x13B\x13C\a\x63\x2\x2\x13C\x13D\aP\x2\x2\x13Dn"+
		"\x3\x2\x2\x2\x13E\x13F\aK\x2\x2\x13F\x140\ap\x2\x2\x140\x141\ah\x2\x2"+
		"\x141\x142\ak\x2\x2\x142\x143\ap\x2\x2\x143\x144\ak\x2\x2\x144\x145\a"+
		"v\x2\x2\x145\x146\a{\x2\x2\x146p\x3\x2\x2\x2\x147\x149\x5s:\x2\x148\x147"+
		"\x3\x2\x2\x2\x149\x14A\x3\x2\x2\x2\x14A\x148\x3\x2\x2\x2\x14A\x14B\x3"+
		"\x2\x2\x2\x14B\x152\x3\x2\x2\x2\x14C\x14E\x5\x41!\x2\x14D\x14F\x5s:\x2"+
		"\x14E\x14D\x3\x2\x2\x2\x14F\x150\x3\x2\x2\x2\x150\x14E\x3\x2\x2\x2\x150"+
		"\x151\x3\x2\x2\x2\x151\x153\x3\x2\x2\x2\x152\x14C\x3\x2\x2\x2\x152\x153"+
		"\x3\x2\x2\x2\x153r\x3\x2\x2\x2\x154\x155\t\x5\x2\x2\x155t\x3\x2\x2\x2"+
		"\x156\x157\a$\x2\x2\x157v\x3\x2\x2\x2\x158\x15C\a^\x2\x2\x159\x15D\t\x2"+
		"\x2\x2\x15A\x15D\x5y=\x2\x15B\x15D\x5}?\x2\x15C\x159\x3\x2\x2\x2\x15C"+
		"\x15A\x3\x2\x2\x2\x15C\x15B\x3\x2\x2\x2\x15Dx\x3\x2\x2\x2\x15E\x15F\a"+
		"w\x2\x2\x15F\x160\x5{>\x2\x160\x161\x5{>\x2\x161\x162\x5{>\x2\x162\x163"+
		"\x5{>\x2\x163z\x3\x2\x2\x2\x164\x165\t\x6\x2\x2\x165|\x3\x2\x2\x2\x166"+
		"\x167\x5\a\x4\x2\x167\x168\x5\x61\x31\x2\x168\x169\x5\t\x5\x2\x169~\x3"+
		"\x2\x2\x2\x16A\x16E\t\a\x2\x2\x16B\x16D\t\b\x2\x2\x16C\x16B\x3\x2\x2\x2"+
		"\x16D\x170\x3\x2\x2\x2\x16E\x16C\x3\x2\x2\x2\x16E\x16F\x3\x2\x2\x2\x16F"+
		"\x80\x3\x2\x2\x2\x170\x16E\x3\x2\x2\x2\xE\x2\x10B\x112\x116\x11D\x11F"+
		"\x135\x14A\x150\x152\x15C\x16E\x3\b\x2\x2";
	public static readonly ATN _ATN =
		new ATNDeserializer().Deserialize(_serializedATN.ToCharArray());
}
} // namespace Vee