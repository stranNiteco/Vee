// Generated from C:/work/Vee\Vee.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');
var VeeVisitor = require('./VeeVisitor').VeeVisitor;

var grammarFileName = "Vee.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003>\u021f\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0003\u0002\u0005\u0002D\n\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003O\n\u0003\u0003\u0003",
    "\u0003\u0003\u0005\u0003S\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0007\u0004Y\n\u0004\f\u0004\u000e\u0004\\\u000b\u0004",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006",
    "i\n\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0007\u0006y\n\u0006\f\u0006\u000e",
    "\u0006|\u000b\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b",
    "\u0003\b\u0003\b\u0003\b\u0003\b\u0006\b\u0087\n\b\r\b\u000e\b\u0088",
    "\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0007\b\u0091\n\b\f",
    "\b\u000e\b\u0094\u000b\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0005",
    "\b\u009b\n\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0005\b",
    "\u00a3\n\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0007\b\u00c0\n\b\f\b\u000e\b\u00c3\u000b\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0005\b\u00cc\n\b\u0003\b",
    "\u0003\b\u0003\b\u0007\b\u00d1\n\b\f\b\u000e\b\u00d4\u000b\b\u0003\b",
    "\u0003\b\u0005\b\u00d8\n\b\u0005\b\u00da\n\b\u0003\b\u0003\b\u0003\b",
    "\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0005\b\u00fd\n\b\u0003\b\u0003\b\u0007\b",
    "\u0101\n\b\f\b\u000e\b\u0104\u000b\b\u0003\b\u0007\b\u0107\n\b\f\b\u000e",
    "\b\u010a\u000b\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0005\n\u0113\n\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\f\u0003\f\u0003\f\u0007\f\u011e\n\f\f\f\u000e\f\u0121",
    "\u000b\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0007\u000f\u0132\n\u000f\f\u000f\u000e\u000f",
    "\u0135\u000b\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0005\u0010\u013c\n\u0010\u0003\u0011\u0003\u0011\u0005\u0011",
    "\u0140\n\u0011\u0003\u0011\u0003\u0011\u0005\u0011\u0144\n\u0011\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0007\u0012\u014a\n\u0012",
    "\f\u0012\u000e\u0012\u014d\u000b\u0012\u0003\u0012\u0005\u0012\u0150",
    "\n\u0012\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0005\u0013",
    "\u0156\n\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0014\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0006\u0014\u015f\n\u0014\r\u0014\u000e",
    "\u0014\u0160\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0005\u0014",
    "\u0167\n\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0007\u0014\u016c",
    "\n\u0014\f\u0014\u000e\u0014\u016f\u000b\u0014\u0003\u0014\u0005\u0014",
    "\u0172\n\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0016\u0003",
    "\u0016\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0005",
    "\u0017\u017e\n\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0018",
    "\u0003\u0018\u0003\u0018\u0003\u0018\u0007\u0018\u0187\n\u0018\f\u0018",
    "\u000e\u0018\u018a\u000b\u0018\u0003\u0018\u0003\u0018\u0005\u0018\u018e",
    "\n\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018",
    "\u0003\u0018\u0007\u0018\u0196\n\u0018\f\u0018\u000e\u0018\u0199\u000b",
    "\u0018\u0003\u0018\u0003\u0018\u0005\u0018\u019d\n\u0018\u0003\u0018",
    "\u0003\u0018\u0003\u0018\u0003\u0018\u0005\u0018\u01a3\n\u0018\u0003",
    "\u0018\u0003\u0018\u0007\u0018\u01a7\n\u0018\f\u0018\u000e\u0018\u01aa",
    "\u000b\u0018\u0003\u0018\u0003\u0018\u0005\u0018\u01ae\n\u0018\u0003",
    "\u0018\u0003\u0018\u0003\u0018\u0005\u0018\u01b3\n\u0018\u0003\u0018",
    "\u0003\u0018\u0007\u0018\u01b7\n\u0018\f\u0018\u000e\u0018\u01ba\u000b",
    "\u0018\u0003\u0018\u0003\u0018\u0005\u0018\u01be\n\u0018\u0003\u0018",
    "\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0007\u0018",
    "\u01c6\n\u0018\f\u0018\u000e\u0018\u01c9\u000b\u0018\u0003\u0018\u0003",
    "\u0018\u0005\u0018\u01cd\n\u0018\u0003\u0018\u0005\u0018\u01d0\n\u0018",
    "\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0005\u0019\u01d6\n",
    "\u0019\u0005\u0019\u01d8\n\u0019\u0003\u001a\u0003\u001a\u0003\u001a",
    "\u0003\u001a\u0003\u001a\u0005\u001a\u01df\n\u001a\u0003\u001b\u0003",
    "\u001b\u0003\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003\u001c\u0003",
    "\u001d\u0003\u001d\u0003\u001d\u0005\u001d\u01eb\n\u001d\u0003\u001d",
    "\u0003\u001d\u0003\u001d\u0003\u001d\u0005\u001d\u01f1\n\u001d\u0007",
    "\u001d\u01f3\n\u001d\f\u001d\u000e\u001d\u01f6\u000b\u001d\u0003\u001e",
    "\u0005\u001e\u01f9\n\u001e\u0003\u001e\u0003\u001e\u0003\u001f\u0003",
    "\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003",
    "\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0005\u001f\u0208\n\u001f",
    "\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0005\u001f\u020e\n",
    "\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003",
    "\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0005\u001f\u0219\n\u001f",
    "\u0003 \u0003 \u0003!\u0003!\u0003!\u0002\u0004\n\u000e\"\u0002\u0004",
    "\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e ",
    "\"$&(*,.02468:<>@\u0002\u000b\u0003\u0002/9\u0003\u0002\u0012\u0013",
    "\u0003\u0002\u000f\u0011\u0003\u0002\u0014\u0015\u0003\u0002\u0016\u0019",
    "\u0003\u0002\u001f \u0005\u0002*+::==\u0004\u0002\u000e\u0019\u001d",
    " \u0004\u0002\u0013\u0013!!\u025a\u0002C\u0003\u0002\u0002\u0002\u0004",
    "R\u0003\u0002\u0002\u0002\u0006T\u0003\u0002\u0002\u0002\b]\u0003\u0002",
    "\u0002\u0002\nh\u0003\u0002\u0002\u0002\f}\u0003\u0002\u0002\u0002\u000e",
    "\u00d9\u0003\u0002\u0002\u0002\u0010\u010b\u0003\u0002\u0002\u0002\u0012",
    "\u010d\u0003\u0002\u0002\u0002\u0014\u0116\u0003\u0002\u0002\u0002\u0016",
    "\u011a\u0003\u0002\u0002\u0002\u0018\u0122\u0003\u0002\u0002\u0002\u001a",
    "\u0128\u0003\u0002\u0002\u0002\u001c\u012e\u0003\u0002\u0002\u0002\u001e",
    "\u013b\u0003\u0002\u0002\u0002 \u0143\u0003\u0002\u0002\u0002\"\u0145",
    "\u0003\u0002\u0002\u0002$\u0155\u0003\u0002\u0002\u0002&\u0171\u0003",
    "\u0002\u0002\u0002(\u0173\u0003\u0002\u0002\u0002*\u0176\u0003\u0002",
    "\u0002\u0002,\u017a\u0003\u0002\u0002\u0002.\u01cf\u0003\u0002\u0002",
    "\u00020\u01d7\u0003\u0002\u0002\u00022\u01d9\u0003\u0002\u0002\u0002",
    "4\u01e0\u0003\u0002\u0002\u00026\u01e4\u0003\u0002\u0002\u00028\u01ea",
    "\u0003\u0002\u0002\u0002:\u01f8\u0003\u0002\u0002\u0002<\u0218\u0003",
    "\u0002\u0002\u0002>\u021a\u0003\u0002\u0002\u0002@\u021c\u0003\u0002",
    "\u0002\u0002BD\u0005\u0004\u0003\u0002CB\u0003\u0002\u0002\u0002CD\u0003",
    "\u0002\u0002\u0002DE\u0003\u0002\u0002\u0002EF\u0005\u000e\b\u0002F",
    "G\u0007\u0002\u0002\u0003G\u0003\u0003\u0002\u0002\u0002HI\u0005\u0006",
    "\u0004\u0002IJ\u0007$\u0002\u0002JS\u0003\u0002\u0002\u0002KS\u0005",
    "\"\u0012\u0002LN\u0005\u0006\u0004\u0002MO\u0007\t\u0002\u0002NM\u0003",
    "\u0002\u0002\u0002NO\u0003\u0002\u0002\u0002OP\u0003\u0002\u0002\u0002",
    "PQ\u0005\"\u0012\u0002QS\u0003\u0002\u0002\u0002RH\u0003\u0002\u0002",
    "\u0002RK\u0003\u0002\u0002\u0002RL\u0003\u0002\u0002\u0002S\u0005\u0003",
    "\u0002\u0002\u0002TU\u0007.\u0002\u0002UZ\u0005\b\u0005\u0002VW\u0007",
    "\t\u0002\u0002WY\u0005\b\u0005\u0002XV\u0003\u0002\u0002\u0002Y\\\u0003",
    "\u0002\u0002\u0002ZX\u0003\u0002\u0002\u0002Z[\u0003\u0002\u0002\u0002",
    "[\u0007\u0003\u0002\u0002\u0002\\Z\u0003\u0002\u0002\u0002]^\u0007;",
    "\u0002\u0002^_\u0007\n\u0002\u0002_`\u0005\n\u0006\u0002`\t\u0003\u0002",
    "\u0002\u0002ab\b\u0006\u0001\u0002bi\u0005\f\u0007\u0002ci\u0007;\u0002",
    "\u0002di\u0007<\u0002\u0002ef\u0007;\u0002\u0002fg\u0007\n\u0002\u0002",
    "gi\u0005\n\u0006\u0004ha\u0003\u0002\u0002\u0002hc\u0003\u0002\u0002",
    "\u0002hd\u0003\u0002\u0002\u0002he\u0003\u0002\u0002\u0002iz\u0003\u0002",
    "\u0002\u0002jk\f\u0007\u0002\u0002kl\u0007\f\u0002\u0002ly\u0005\n\u0006",
    "\bmn\f\u0006\u0002\u0002no\u0007\u001a\u0002\u0002oy\u0005\n\u0006\u0007",
    "pq\f\u0005\u0002\u0002qr\u0007\t\u0002\u0002ry\u0005\n\u0006\u0006s",
    "t\f\u0003\u0002\u0002tu\u0007\u0007\u0002\u0002uv\u0005\n\u0006\u0002",
    "vw\u0007\b\u0002\u0002wy\u0003\u0002\u0002\u0002xj\u0003\u0002\u0002",
    "\u0002xm\u0003\u0002\u0002\u0002xp\u0003\u0002\u0002\u0002xs\u0003\u0002",
    "\u0002\u0002y|\u0003\u0002\u0002\u0002zx\u0003\u0002\u0002\u0002z{\u0003",
    "\u0002\u0002\u0002{\u000b\u0003\u0002\u0002\u0002|z\u0003\u0002\u0002",
    "\u0002}~\t\u0002\u0002\u0002~\r\u0003\u0002\u0002\u0002\u007f\u0080",
    "\b\b\u0001\u0002\u0080\u00da\u0005\u0010\t\u0002\u0081\u00da\u0007;",
    "\u0002\u0002\u0082\u0083\u0007\u0007\u0002\u0002\u0083\u0086\u0005\u000e",
    "\b\u0002\u0084\u0085\u0007\t\u0002\u0002\u0085\u0087\u0005\u000e\b\u0002",
    "\u0086\u0084\u0003\u0002\u0002\u0002\u0087\u0088\u0003\u0002\u0002\u0002",
    "\u0088\u0086\u0003\u0002\u0002\u0002\u0088\u0089\u0003\u0002\u0002\u0002",
    "\u0089\u008a\u0003\u0002\u0002\u0002\u008a\u008b\u0007\b\u0002\u0002",
    "\u008b\u00da\u0003\u0002\u0002\u0002\u008c\u008d\u0007\u0005\u0002\u0002",
    "\u008d\u0092\u0005\u0014\u000b\u0002\u008e\u008f\u0007\t\u0002\u0002",
    "\u008f\u0091\u0005\u0014\u000b\u0002\u0090\u008e\u0003\u0002\u0002\u0002",
    "\u0091\u0094\u0003\u0002\u0002\u0002\u0092\u0090\u0003\u0002\u0002\u0002",
    "\u0092\u0093\u0003\u0002\u0002\u0002\u0093\u0095\u0003\u0002\u0002\u0002",
    "\u0094\u0092\u0003\u0002\u0002\u0002\u0095\u0096\u0007\u0006\u0002\u0002",
    "\u0096\u00da\u0003\u0002\u0002\u0002\u0097\u009a\u0007\u0005\u0002\u0002",
    "\u0098\u009b\u0005\u0016\f\u0002\u0099\u009b\u0005\u001a\u000e\u0002",
    "\u009a\u0098\u0003\u0002\u0002\u0002\u009a\u0099\u0003\u0002\u0002\u0002",
    "\u009b\u009c\u0003\u0002\u0002\u0002\u009c\u009d\u0007\u0006\u0002\u0002",
    "\u009d\u00da\u0003\u0002\u0002\u0002\u009e\u00a2\u0007\u0003\u0002\u0002",
    "\u009f\u00a3\u0005\u0012\n\u0002\u00a0\u00a3\u0005\u001c\u000f\u0002",
    "\u00a1\u00a3\u0005\n\u0006\u0002\u00a2\u009f\u0003\u0002\u0002\u0002",
    "\u00a2\u00a0\u0003\u0002\u0002\u0002\u00a2\u00a1\u0003\u0002\u0002\u0002",
    "\u00a3\u00a4\u0003\u0002\u0002\u0002\u00a4\u00a5\u0007\u0004\u0002\u0002",
    "\u00a5\u00da\u0003\u0002\u0002\u0002\u00a6\u00a7\u0007\u0007\u0002\u0002",
    "\u00a7\u00a8\u0005\u000e\b\u0002\u00a8\u00a9\u0007\b\u0002\u0002\u00a9",
    "\u00da\u0003\u0002\u0002\u0002\u00aa\u00ab\u0007!\u0002\u0002\u00ab",
    "\u00da\u0005\u000e\b\u0012\u00ac\u00ad\t\u0003\u0002\u0002\u00ad\u00da",
    "\u0005\u000e\b\u0011\u00ae\u00af\u0007\"\u0002\u0002\u00af\u00da\u0005",
    "\u000e\b\u0010\u00b0\u00b1\u0007\u001a\u0002\u0002\u00b1\u00b2\u0005",
    "<\u001f\u0002\u00b2\u00b3\u0007\u001a\u0002\u0002\u00b3\u00da\u0003",
    "\u0002\u0002\u0002\u00b4\u00b5\u0007\r\u0002\u0002\u00b5\u00b6\u0007",
    "\u0007\u0002\u0002\u00b6\u00b7\u00058\u001d\u0002\u00b7\u00b8\u0007",
    "\b\u0002\u0002\u00b8\u00b9\u0007\f\u0002\u0002\u00b9\u00ba\u0005:\u001e",
    "\u0002\u00ba\u00da\u0003\u0002\u0002\u0002\u00bb\u00bc\u0007%\u0002",
    "\u0002\u00bc\u00c1\u0005*\u0016\u0002\u00bd\u00be\u0007\u001a\u0002",
    "\u0002\u00be\u00c0\u0005*\u0016\u0002\u00bf\u00bd\u0003\u0002\u0002",
    "\u0002\u00c0\u00c3\u0003\u0002\u0002\u0002\u00c1\u00bf\u0003\u0002\u0002",
    "\u0002\u00c1\u00c2\u0003\u0002\u0002\u0002\u00c2\u00c4\u0003\u0002\u0002",
    "\u0002\u00c3\u00c1\u0003\u0002\u0002\u0002\u00c4\u00c5\u0007)\u0002",
    "\u0002\u00c5\u00c6\u0005\u000e\b\u0004\u00c6\u00da\u0003\u0002\u0002",
    "\u0002\u00c7\u00c8\u0007%\u0002\u0002\u00c8\u00c9\u0005\u000e\b\u0002",
    "\u00c9\u00cb\u0007&\u0002\u0002\u00ca\u00cc\u0007\u001a\u0002\u0002",
    "\u00cb\u00ca\u0003\u0002\u0002\u0002\u00cb\u00cc\u0003\u0002\u0002\u0002",
    "\u00cc\u00cd\u0003\u0002\u0002\u0002\u00cd\u00d2\u0005,\u0017\u0002",
    "\u00ce\u00cf\u0007\u001a\u0002\u0002\u00cf\u00d1\u0005,\u0017\u0002",
    "\u00d0\u00ce\u0003\u0002\u0002\u0002\u00d1\u00d4\u0003\u0002\u0002\u0002",
    "\u00d2\u00d0\u0003\u0002\u0002\u0002\u00d2\u00d3\u0003\u0002\u0002\u0002",
    "\u00d3\u00d7\u0003\u0002\u0002\u0002\u00d4\u00d2\u0003\u0002\u0002\u0002",
    "\u00d5\u00d6\u0007)\u0002\u0002\u00d6\u00d8\u0005\u000e\b\u0002\u00d7",
    "\u00d5\u0003\u0002\u0002\u0002\u00d7\u00d8\u0003\u0002\u0002\u0002\u00d8",
    "\u00da\u0003\u0002\u0002\u0002\u00d9\u007f\u0003\u0002\u0002\u0002\u00d9",
    "\u0081\u0003\u0002\u0002\u0002\u00d9\u0082\u0003\u0002\u0002\u0002\u00d9",
    "\u008c\u0003\u0002\u0002\u0002\u00d9\u0097\u0003\u0002\u0002\u0002\u00d9",
    "\u009e\u0003\u0002\u0002\u0002\u00d9\u00a6\u0003\u0002\u0002\u0002\u00d9",
    "\u00aa\u0003\u0002\u0002\u0002\u00d9\u00ac\u0003\u0002\u0002\u0002\u00d9",
    "\u00ae\u0003\u0002\u0002\u0002\u00d9\u00b0\u0003\u0002\u0002\u0002\u00d9",
    "\u00b4\u0003\u0002\u0002\u0002\u00d9\u00bb\u0003\u0002\u0002\u0002\u00d9",
    "\u00c7\u0003\u0002\u0002\u0002\u00da\u0108\u0003\u0002\u0002\u0002\u00db",
    "\u00dc\f\u000f\u0002\u0002\u00dc\u00dd\u0007\u000e\u0002\u0002\u00dd",
    "\u0107\u0005\u000e\b\u0010\u00de\u00df\f\u000e\u0002\u0002\u00df\u00e0",
    "\t\u0004\u0002\u0002\u00e0\u0107\u0005\u000e\b\u000f\u00e1\u00e2\f\r",
    "\u0002\u0002\u00e2\u00e3\t\u0003\u0002\u0002\u00e3\u0107\u0005\u000e",
    "\b\u000e\u00e4\u00e5\f\f\u0002\u0002\u00e5\u00e6\t\u0005\u0002\u0002",
    "\u00e6\u0107\u0005\u000e\b\r\u00e7\u00e8\f\u000b\u0002\u0002\u00e8\u00e9",
    "\t\u0006\u0002\u0002\u00e9\u0107\u0005\u000e\b\f\u00ea\u00eb\f\n\u0002",
    "\u0002\u00eb\u00ec\t\u0007\u0002\u0002\u00ec\u0107\u0005\u000e\b\u000b",
    "\u00ed\u00ee\f\t\u0002\u0002\u00ee\u00ef\u0007\u001d\u0002\u0002\u00ef",
    "\u0107\u0005\u000e\b\n\u00f0\u00f1\f\b\u0002\u0002\u00f1\u00f2\u0007",
    "\u001e\u0002\u0002\u00f2\u0107\u0005\u000e\b\t\u00f3\u00f4\f\u0007\u0002",
    "\u0002\u00f4\u00f5\u0007\u001b\u0002\u0002\u00f5\u0107\u0005\u000e\b",
    "\b\u00f6\u00f7\f\u0014\u0002\u0002\u00f7\u00f8\u0007\u001c\u0002\u0002",
    "\u00f8\u0107\u0005\u001e\u0010\u0002\u00f9\u00fa\f\u0013\u0002\u0002",
    "\u00fa\u00fc\u0007\u0007\u0002\u0002\u00fb\u00fd\u0005 \u0011\u0002",
    "\u00fc\u00fb\u0003\u0002\u0002\u0002\u00fc\u00fd\u0003\u0002\u0002\u0002",
    "\u00fd\u0102\u0003\u0002\u0002\u0002\u00fe\u00ff\u0007\t\u0002\u0002",
    "\u00ff\u0101\u0005 \u0011\u0002\u0100\u00fe\u0003\u0002\u0002\u0002",
    "\u0101\u0104\u0003\u0002\u0002\u0002\u0102\u0100\u0003\u0002\u0002\u0002",
    "\u0102\u0103\u0003\u0002\u0002\u0002\u0103\u0105\u0003\u0002\u0002\u0002",
    "\u0104\u0102\u0003\u0002\u0002\u0002\u0105\u0107\u0007\b\u0002\u0002",
    "\u0106\u00db\u0003\u0002\u0002\u0002\u0106\u00de\u0003\u0002\u0002\u0002",
    "\u0106\u00e1\u0003\u0002\u0002\u0002\u0106\u00e4\u0003\u0002\u0002\u0002",
    "\u0106\u00e7\u0003\u0002\u0002\u0002\u0106\u00ea\u0003\u0002\u0002\u0002",
    "\u0106\u00ed\u0003\u0002\u0002\u0002\u0106\u00f0\u0003\u0002\u0002\u0002",
    "\u0106\u00f3\u0003\u0002\u0002\u0002\u0106\u00f6\u0003\u0002\u0002\u0002",
    "\u0106\u00f9\u0003\u0002\u0002\u0002\u0107\u010a\u0003\u0002\u0002\u0002",
    "\u0108\u0106\u0003\u0002\u0002\u0002\u0108\u0109\u0003\u0002\u0002\u0002",
    "\u0109\u000f\u0003\u0002\u0002\u0002\u010a\u0108\u0003\u0002\u0002\u0002",
    "\u010b\u010c\t\b\u0002\u0002\u010c\u0011\u0003\u0002\u0002\u0002\u010d",
    "\u010e\u0007:\u0002\u0002\u010e\u0112\u0007\u000b\u0002\u0002\u010f",
    "\u0110\t\u0003\u0002\u0002\u0110\u0111\u0007:\u0002\u0002\u0111\u0113",
    "\u0007\u000b\u0002\u0002\u0112\u010f\u0003\u0002\u0002\u0002\u0112\u0113",
    "\u0003\u0002\u0002\u0002\u0113\u0114\u0003\u0002\u0002\u0002\u0114\u0115",
    "\u0007:\u0002\u0002\u0115\u0013\u0003\u0002\u0002\u0002\u0116\u0117",
    "\u0007;\u0002\u0002\u0117\u0118\u0007\n\u0002\u0002\u0118\u0119\u0005",
    "\u000e\b\u0002\u0119\u0015\u0003\u0002\u0002\u0002\u011a\u011f\u0005",
    "\u0018\r\u0002\u011b\u011c\u0007\t\u0002\u0002\u011c\u011e\u0005\u0018",
    "\r\u0002\u011d\u011b\u0003\u0002\u0002\u0002\u011e\u0121\u0003\u0002",
    "\u0002\u0002\u011f\u011d\u0003\u0002\u0002\u0002\u011f\u0120\u0003\u0002",
    "\u0002\u0002\u0120\u0017\u0003\u0002\u0002\u0002\u0121\u011f\u0003\u0002",
    "\u0002\u0002\u0122\u0123\u0007\u0003\u0002\u0002\u0123\u0124\u0005\u000e",
    "\b\u0002\u0124\u0125\u0007\u0004\u0002\u0002\u0125\u0126\u0007\n\u0002",
    "\u0002\u0126\u0127\u0005\u000e\b\u0002\u0127\u0019\u0003\u0002\u0002",
    "\u0002\u0128\u0129\u0007\u0003\u0002\u0002\u0129\u012a\u0005\n\u0006",
    "\u0002\u012a\u012b\u0007\u0004\u0002\u0002\u012b\u012c\u0007\n\u0002",
    "\u0002\u012c\u012d\u0005\n\u0006\u0002\u012d\u001b\u0003\u0002\u0002",
    "\u0002\u012e\u0133\u0005\u000e\b\u0002\u012f\u0130\u0007\t\u0002\u0002",
    "\u0130\u0132\u0005\u000e\b\u0002\u0131\u012f\u0003\u0002\u0002\u0002",
    "\u0132\u0135\u0003\u0002\u0002\u0002\u0133\u0131\u0003\u0002\u0002\u0002",
    "\u0133\u0134\u0003\u0002\u0002\u0002\u0134\u001d\u0003\u0002\u0002\u0002",
    "\u0135\u0133\u0003\u0002\u0002\u0002\u0136\u0137\u0007\u0003\u0002\u0002",
    "\u0137\u0138\u0005\u000e\b\u0002\u0138\u0139\u0007\u0004\u0002\u0002",
    "\u0139\u013c\u0003\u0002\u0002\u0002\u013a\u013c\u0007;\u0002\u0002",
    "\u013b\u0136\u0003\u0002\u0002\u0002\u013b\u013a\u0003\u0002\u0002\u0002",
    "\u013c\u001f\u0003\u0002\u0002\u0002\u013d\u013e\u0007;\u0002\u0002",
    "\u013e\u0140\u0007\n\u0002\u0002\u013f\u013d\u0003\u0002\u0002\u0002",
    "\u013f\u0140\u0003\u0002\u0002\u0002\u0140\u0141\u0003\u0002\u0002\u0002",
    "\u0141\u0144\u0005\u000e\b\u0002\u0142\u0144\u0007<\u0002\u0002\u0143",
    "\u013f\u0003\u0002\u0002\u0002\u0143\u0142\u0003\u0002\u0002\u0002\u0144",
    "!\u0003\u0002\u0002\u0002\u0145\u0146\u0007#\u0002\u0002\u0146\u014b",
    "\u0005$\u0013\u0002\u0147\u0148\u0007\t\u0002\u0002\u0148\u014a\u0005",
    "$\u0013\u0002\u0149\u0147\u0003\u0002\u0002\u0002\u014a\u014d\u0003",
    "\u0002\u0002\u0002\u014b\u0149\u0003\u0002\u0002\u0002\u014b\u014c\u0003",
    "\u0002\u0002\u0002\u014c\u014f\u0003\u0002\u0002\u0002\u014d\u014b\u0003",
    "\u0002\u0002\u0002\u014e\u0150\u0007\t\u0002\u0002\u014f\u014e\u0003",
    "\u0002\u0002\u0002\u014f\u0150\u0003\u0002\u0002\u0002\u0150\u0151\u0003",
    "\u0002\u0002\u0002\u0151\u0152\u0007$\u0002\u0002\u0152#\u0003\u0002",
    "\u0002\u0002\u0153\u0156\u0007;\u0002\u0002\u0154\u0156\u0005&\u0014",
    "\u0002\u0155\u0153\u0003\u0002\u0002\u0002\u0155\u0154\u0003\u0002\u0002",
    "\u0002\u0156\u0157\u0003\u0002\u0002\u0002\u0157\u0158\u0007\n\u0002",
    "\u0002\u0158\u0159\u0005\u000e\b\u0002\u0159%\u0003\u0002\u0002\u0002",
    "\u015a\u015b\u0007\u0007\u0002\u0002\u015b\u015e\u0007;\u0002\u0002",
    "\u015c\u015d\u0007\t\u0002\u0002\u015d\u015f\u0007;\u0002\u0002\u015e",
    "\u015c\u0003\u0002\u0002\u0002\u015f\u0160\u0003\u0002\u0002\u0002\u0160",
    "\u015e\u0003\u0002\u0002\u0002\u0160\u0161\u0003\u0002\u0002\u0002\u0161",
    "\u0162\u0003\u0002\u0002\u0002\u0162\u0172\u0007\b\u0002\u0002\u0163",
    "\u0164\u0007\u0005\u0002\u0002\u0164\u0166\u0007;\u0002\u0002\u0165",
    "\u0167\u0005(\u0015\u0002\u0166\u0165\u0003\u0002\u0002\u0002\u0166",
    "\u0167\u0003\u0002\u0002\u0002\u0167\u016d\u0003\u0002\u0002\u0002\u0168",
    "\u0169\u0007\t\u0002\u0002\u0169\u016a\u0007;\u0002\u0002\u016a\u016c",
    "\u0005(\u0015\u0002\u016b\u0168\u0003\u0002\u0002\u0002\u016c\u016f",
    "\u0003\u0002\u0002\u0002\u016d\u016b\u0003\u0002\u0002\u0002\u016d\u016e",
    "\u0003\u0002\u0002\u0002\u016e\u0170\u0003\u0002\u0002\u0002\u016f\u016d",
    "\u0003\u0002\u0002\u0002\u0170\u0172\u0007\u0006\u0002\u0002\u0171\u015a",
    "\u0003\u0002\u0002\u0002\u0171\u0163\u0003\u0002\u0002\u0002\u0172\'",
    "\u0003\u0002\u0002\u0002\u0173\u0174\u0007-\u0002\u0002\u0174\u0175",
    "\u0007;\u0002\u0002\u0175)\u0003\u0002\u0002\u0002\u0176\u0177\u0005",
    "\u000e\b\u0002\u0177\u0178\u0007(\u0002\u0002\u0178\u0179\u0005\u000e",
    "\b\u0002\u0179+\u0003\u0002\u0002\u0002\u017a\u017d\u0005.\u0018\u0002",
    "\u017b\u017c\u0007\'\u0002\u0002\u017c\u017e\u0005\u000e\b\u0002\u017d",
    "\u017b\u0003\u0002\u0002\u0002\u017d\u017e\u0003\u0002\u0002\u0002\u017e",
    "\u017f\u0003\u0002\u0002\u0002\u017f\u0180\u0007(\u0002\u0002\u0180",
    "\u0181\u0005\u000e\b\u0002\u0181-\u0003\u0002\u0002\u0002\u0182\u0183",
    "\u0007\u0007\u0002\u0002\u0183\u0188\u00050\u0019\u0002\u0184\u0185",
    "\u0007\t\u0002\u0002\u0185\u0187\u00050\u0019\u0002\u0186\u0184\u0003",
    "\u0002\u0002\u0002\u0187\u018a\u0003\u0002\u0002\u0002\u0188\u0186\u0003",
    "\u0002\u0002\u0002\u0188\u0189\u0003\u0002\u0002\u0002\u0189\u018d\u0003",
    "\u0002\u0002\u0002\u018a\u0188\u0003\u0002\u0002\u0002\u018b\u018c\u0007",
    "\t\u0002\u0002\u018c\u018e\u00056\u001c\u0002\u018d\u018b\u0003\u0002",
    "\u0002\u0002\u018d\u018e\u0003\u0002\u0002\u0002\u018e\u018f\u0003\u0002",
    "\u0002\u0002\u018f\u0190\u0007\b\u0002\u0002\u0190\u01d0\u0003\u0002",
    "\u0002\u0002\u0191\u0192\u0007\u0005\u0002\u0002\u0192\u0197\u00054",
    "\u001b\u0002\u0193\u0194\u0007\t\u0002\u0002\u0194\u0196\u00054\u001b",
    "\u0002\u0195\u0193\u0003\u0002\u0002\u0002\u0196\u0199\u0003\u0002\u0002",
    "\u0002\u0197\u0195\u0003\u0002\u0002\u0002\u0197\u0198\u0003\u0002\u0002",
    "\u0002\u0198\u019c\u0003\u0002\u0002\u0002\u0199\u0197\u0003\u0002\u0002",
    "\u0002\u019a\u019b\u0007\t\u0002\u0002\u019b\u019d\u00056\u001c\u0002",
    "\u019c\u019a\u0003\u0002\u0002\u0002\u019c\u019d\u0003\u0002\u0002\u0002",
    "\u019d\u019e\u0003\u0002\u0002\u0002\u019e\u019f\u0007\u0006\u0002\u0002",
    "\u019f\u01d0\u0003\u0002\u0002\u0002\u01a0\u01a2\u0007\u0003\u0002\u0002",
    "\u01a1\u01a3\u00050\u0019\u0002\u01a2\u01a1\u0003\u0002\u0002\u0002",
    "\u01a2\u01a3\u0003\u0002\u0002\u0002\u01a3\u01a8\u0003\u0002\u0002\u0002",
    "\u01a4\u01a5\u0007\t\u0002\u0002\u01a5\u01a7\u00050\u0019\u0002\u01a6",
    "\u01a4\u0003\u0002\u0002\u0002\u01a7\u01aa\u0003\u0002\u0002\u0002\u01a8",
    "\u01a6\u0003\u0002\u0002\u0002\u01a8\u01a9\u0003\u0002\u0002\u0002\u01a9",
    "\u01ad\u0003\u0002\u0002\u0002\u01aa\u01a8\u0003\u0002\u0002\u0002\u01ab",
    "\u01ac\u0007\t\u0002\u0002\u01ac\u01ae\u00056\u001c\u0002\u01ad\u01ab",
    "\u0003\u0002\u0002\u0002\u01ad\u01ae\u0003\u0002\u0002\u0002\u01ae\u01af",
    "\u0003\u0002\u0002\u0002\u01af\u01d0\u0007\u0004\u0002\u0002\u01b0\u01b2",
    "\u0007\u0005\u0002\u0002\u01b1\u01b3\u00052\u001a\u0002\u01b2\u01b1",
    "\u0003\u0002\u0002\u0002\u01b2\u01b3\u0003\u0002\u0002\u0002\u01b3\u01b8",
    "\u0003\u0002\u0002\u0002\u01b4\u01b5\u0007\t\u0002\u0002\u01b5\u01b7",
    "\u00052\u001a\u0002\u01b6\u01b4\u0003\u0002\u0002\u0002\u01b7\u01ba",
    "\u0003\u0002\u0002\u0002\u01b8\u01b6\u0003\u0002\u0002\u0002\u01b8\u01b9",
    "\u0003\u0002\u0002\u0002\u01b9\u01bd\u0003\u0002\u0002\u0002\u01ba\u01b8",
    "\u0003\u0002\u0002\u0002\u01bb\u01bc\u0007\t\u0002\u0002\u01bc\u01be",
    "\u00056\u001c\u0002\u01bd\u01bb\u0003\u0002\u0002\u0002\u01bd\u01be",
    "\u0003\u0002\u0002\u0002\u01be\u01bf\u0003\u0002\u0002\u0002\u01bf\u01d0",
    "\u0007\u0006\u0002\u0002\u01c0\u01cc\u0007;\u0002\u0002\u01c1\u01c2",
    "\u0007\u0007\u0002\u0002\u01c2\u01c7\u00050\u0019\u0002\u01c3\u01c4",
    "\u0007\t\u0002\u0002\u01c4\u01c6\u00050\u0019\u0002\u01c5\u01c3\u0003",
    "\u0002\u0002\u0002\u01c6\u01c9\u0003\u0002\u0002\u0002\u01c7\u01c5\u0003",
    "\u0002\u0002\u0002\u01c7\u01c8\u0003\u0002\u0002\u0002\u01c8\u01ca\u0003",
    "\u0002\u0002\u0002\u01c9\u01c7\u0003\u0002\u0002\u0002\u01ca\u01cb\u0007",
    "\b\u0002\u0002\u01cb\u01cd\u0003\u0002\u0002\u0002\u01cc\u01c1\u0003",
    "\u0002\u0002\u0002\u01cc\u01cd\u0003\u0002\u0002\u0002\u01cd\u01d0\u0003",
    "\u0002\u0002\u0002\u01ce\u01d0\u0005\u0010\t\u0002\u01cf\u0182\u0003",
    "\u0002\u0002\u0002\u01cf\u0191\u0003\u0002\u0002\u0002\u01cf\u01a0\u0003",
    "\u0002\u0002\u0002\u01cf\u01b0\u0003\u0002\u0002\u0002\u01cf\u01c0\u0003",
    "\u0002\u0002\u0002\u01cf\u01ce\u0003\u0002\u0002\u0002\u01d0/\u0003",
    "\u0002\u0002\u0002\u01d1\u01d8\u0007;\u0002\u0002\u01d2\u01d8\u0005",
    ".\u0018\u0002\u01d3\u01d5\u0005\n\u0006\u0002\u01d4\u01d6\u0005(\u0015",
    "\u0002\u01d5\u01d4\u0003\u0002\u0002\u0002\u01d5\u01d6\u0003\u0002\u0002",
    "\u0002\u01d6\u01d8\u0003\u0002\u0002\u0002\u01d7\u01d1\u0003\u0002\u0002",
    "\u0002\u01d7\u01d2\u0003\u0002\u0002\u0002\u01d7\u01d3\u0003\u0002\u0002",
    "\u0002\u01d81\u0003\u0002\u0002\u0002\u01d9\u01da\u0007\u0003\u0002",
    "\u0002\u01da\u01db\u0005\u0010\t\u0002\u01db\u01de\u0007\u0004\u0002",
    "\u0002\u01dc\u01dd\u0007\n\u0002\u0002\u01dd\u01df\u00050\u0019\u0002",
    "\u01de\u01dc\u0003\u0002\u0002\u0002\u01de\u01df\u0003\u0002\u0002\u0002",
    "\u01df3\u0003\u0002\u0002\u0002\u01e0\u01e1\u0007;\u0002\u0002\u01e1",
    "\u01e2\u0007\n\u0002\u0002\u01e2\u01e3\u00050\u0019\u0002\u01e35\u0003",
    "\u0002\u0002\u0002\u01e4\u01e5\u0007\u000b\u0002\u0002\u01e5\u01e6\u0007",
    ";\u0002\u0002\u01e67\u0003\u0002\u0002\u0002\u01e7\u01e8\u0007;\u0002",
    "\u0002\u01e8\u01e9\u0007\n\u0002\u0002\u01e9\u01eb\u0005\n\u0006\u0002",
    "\u01ea\u01e7\u0003\u0002\u0002\u0002\u01ea\u01eb\u0003\u0002\u0002\u0002",
    "\u01eb\u01f4\u0003\u0002\u0002\u0002\u01ec\u01ed\u0007\t\u0002\u0002",
    "\u01ed\u01f0\u0007;\u0002\u0002\u01ee\u01ef\u0007\n\u0002\u0002\u01ef",
    "\u01f1\u0005\n\u0006\u0002\u01f0\u01ee\u0003\u0002\u0002\u0002\u01f0",
    "\u01f1\u0003\u0002\u0002\u0002\u01f1\u01f3\u0003\u0002\u0002\u0002\u01f2",
    "\u01ec\u0003\u0002\u0002\u0002\u01f3\u01f6\u0003\u0002\u0002\u0002\u01f4",
    "\u01f2\u0003\u0002\u0002\u0002\u01f4\u01f5\u0003\u0002\u0002\u0002\u01f5",
    "9\u0003\u0002\u0002\u0002\u01f6\u01f4\u0003\u0002\u0002\u0002\u01f7",
    "\u01f9\u0005\"\u0012\u0002\u01f8\u01f7\u0003\u0002\u0002\u0002\u01f8",
    "\u01f9\u0003\u0002\u0002\u0002\u01f9\u01fa\u0003\u0002\u0002\u0002\u01fa",
    "\u01fb\u0005\u000e\b\u0002\u01fb;\u0003\u0002\u0002\u0002\u01fc\u01fd",
    "\u0007<\u0002\u0002\u01fd\u01fe\u0005> \u0002\u01fe\u01ff\u0005\u000e",
    "\b\u0002\u01ff\u0219\u0003\u0002\u0002\u0002\u0200\u0201\u0005\u000e",
    "\b\u0002\u0201\u0202\u0005> \u0002\u0202\u0203\u0007<\u0002\u0002\u0203",
    "\u0219\u0003\u0002\u0002\u0002\u0204\u0207\u0007<\u0002\u0002\u0205",
    "\u0206\u0007\n\u0002\u0002\u0206\u0208\u0005\n\u0006\u0002\u0207\u0205",
    "\u0003\u0002\u0002\u0002\u0207\u0208\u0003\u0002\u0002\u0002\u0208\u0209",
    "\u0003\u0002\u0002\u0002\u0209\u020a\u0005> \u0002\u020a\u020d\u0007",
    "<\u0002\u0002\u020b\u020c\u0007\n\u0002\u0002\u020c\u020e\u0005\n\u0006",
    "\u0002\u020d\u020b\u0003\u0002\u0002\u0002\u020d\u020e\u0003\u0002\u0002",
    "\u0002\u020e\u0219\u0003\u0002\u0002\u0002\u020f\u0210\u0005@!\u0002",
    "\u0210\u0211\u0007<\u0002\u0002\u0211\u0219\u0003\u0002\u0002\u0002",
    "\u0212\u0213\u0007<\u0002\u0002\u0213\u0214\u0007\n\u0002\u0002\u0214",
    "\u0215\u0005\n\u0006\u0002\u0215\u0216\u0007\u001c\u0002\u0002\u0216",
    "\u0217\u0005\u001e\u0010\u0002\u0217\u0219\u0003\u0002\u0002\u0002\u0218",
    "\u01fc\u0003\u0002\u0002\u0002\u0218\u0200\u0003\u0002\u0002\u0002\u0218",
    "\u0204\u0003\u0002\u0002\u0002\u0218\u020f\u0003\u0002\u0002\u0002\u0218",
    "\u0212\u0003\u0002\u0002\u0002\u0219=\u0003\u0002\u0002\u0002\u021a",
    "\u021b\t\t\u0002\u0002\u021b?\u0003\u0002\u0002\u0002\u021c\u021d\t",
    "\n\u0002\u0002\u021dA\u0003\u0002\u0002\u0002;CNRZhxz\u0088\u0092\u009a",
    "\u00a2\u00c1\u00cb\u00d2\u00d7\u00d9\u00fc\u0102\u0106\u0108\u0112\u011f",
    "\u0133\u013b\u013f\u0143\u014b\u014f\u0155\u0160\u0166\u016d\u0171\u017d",
    "\u0188\u018d\u0197\u019c\u01a2\u01a8\u01ad\u01b2\u01b8\u01bd\u01c7\u01cc",
    "\u01cf\u01d5\u01d7\u01de\u01ea\u01f0\u01f4\u01f8\u0207\u020d\u0218"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'['", "']'", "'{'", "'}'", "'('", "')'", "','", 
                     "':'", "'..'", "'->'", "'\\'", "'^'", "'*'", "'/'", 
                     "'%'", "'+'", "'-'", "'='", "'!='", "'<'", "'>'", "'<='", 
                     "'>='", "'|'", "'|>'", "'.'", "'::'", "'>>'", "'and'", 
                     "'or'", "'not'", "'typeof'", "'let'", "'in'", "'if'", 
                     "'is'", "'when'", "'then'", "'else'", "'true'", "'false'", 
                     "'new'", "'as'", "'type'", "'string'", "'number'", 
                     "'boolean'", "'enum'", "'tuple'", "'record'", "'list'", 
                     "'map'", "'task'", "'option'", "'unit'" ];

var symbolicNames = [ null, "LBracket", "RBracket", "LBrace", "RBrace", 
                      "LParen", "RParen", "Comma", "Colon", "Range", "Arrow", 
                      "Lambda", "Pow", "Multiply", "Divide", "Modulo", "Plus", 
                      "Minus", "Eq", "Neq", "Lt", "Gt", "Lte", "Gte", "Pipe", 
                      "RPipe", "Dot", "Combine", "CombineF", "AndAlso", 
                      "OrElse", "Not", "TypeOf", "Let", "In", "If", "Is", 
                      "When", "Then", "Else", "True", "False", "New", "As", 
                      "Type", "StringType", "NumberType", "BooleanType", 
                      "EnumType", "TupleType", "RecordType", "ListType", 
                      "MapType", "TaskType", "OptionType", "UnitType", "Number", 
                      "Name", "OpenTypeParam", "String", "WS" ];

var ruleNames =  [ "root", "setup", "typeDefs", "typeDef", "type", "typeName", 
                   "expression", "constant", "nums", "recordPair", "mapItems", 
                   "mapPair", "mapType", "listItems", "member", "argument", 
                   "declarations", "declaration", "extraction", "alias", 
                   "condition", "match", "pattern", "capture", "mapPairPattern", 
                   "recPairPattern", "rest", "lambdaParams", "lambdaBody", 
                   "operators", "binaryOperators", "unaryOperators" ];

function VeeParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

VeeParser.prototype = Object.create(antlr4.Parser.prototype);
VeeParser.prototype.constructor = VeeParser;

Object.defineProperty(VeeParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

VeeParser.EOF = antlr4.Token.EOF;
VeeParser.LBracket = 1;
VeeParser.RBracket = 2;
VeeParser.LBrace = 3;
VeeParser.RBrace = 4;
VeeParser.LParen = 5;
VeeParser.RParen = 6;
VeeParser.Comma = 7;
VeeParser.Colon = 8;
VeeParser.Range = 9;
VeeParser.Arrow = 10;
VeeParser.Lambda = 11;
VeeParser.Pow = 12;
VeeParser.Multiply = 13;
VeeParser.Divide = 14;
VeeParser.Modulo = 15;
VeeParser.Plus = 16;
VeeParser.Minus = 17;
VeeParser.Eq = 18;
VeeParser.Neq = 19;
VeeParser.Lt = 20;
VeeParser.Gt = 21;
VeeParser.Lte = 22;
VeeParser.Gte = 23;
VeeParser.Pipe = 24;
VeeParser.RPipe = 25;
VeeParser.Dot = 26;
VeeParser.Combine = 27;
VeeParser.CombineF = 28;
VeeParser.AndAlso = 29;
VeeParser.OrElse = 30;
VeeParser.Not = 31;
VeeParser.TypeOf = 32;
VeeParser.Let = 33;
VeeParser.In = 34;
VeeParser.If = 35;
VeeParser.Is = 36;
VeeParser.When = 37;
VeeParser.Then = 38;
VeeParser.Else = 39;
VeeParser.True = 40;
VeeParser.False = 41;
VeeParser.New = 42;
VeeParser.As = 43;
VeeParser.Type = 44;
VeeParser.StringType = 45;
VeeParser.NumberType = 46;
VeeParser.BooleanType = 47;
VeeParser.EnumType = 48;
VeeParser.TupleType = 49;
VeeParser.RecordType = 50;
VeeParser.ListType = 51;
VeeParser.MapType = 52;
VeeParser.TaskType = 53;
VeeParser.OptionType = 54;
VeeParser.UnitType = 55;
VeeParser.Number = 56;
VeeParser.Name = 57;
VeeParser.OpenTypeParam = 58;
VeeParser.String = 59;
VeeParser.WS = 60;

VeeParser.RULE_root = 0;
VeeParser.RULE_setup = 1;
VeeParser.RULE_typeDefs = 2;
VeeParser.RULE_typeDef = 3;
VeeParser.RULE_type = 4;
VeeParser.RULE_typeName = 5;
VeeParser.RULE_expression = 6;
VeeParser.RULE_constant = 7;
VeeParser.RULE_nums = 8;
VeeParser.RULE_recordPair = 9;
VeeParser.RULE_mapItems = 10;
VeeParser.RULE_mapPair = 11;
VeeParser.RULE_mapType = 12;
VeeParser.RULE_listItems = 13;
VeeParser.RULE_member = 14;
VeeParser.RULE_argument = 15;
VeeParser.RULE_declarations = 16;
VeeParser.RULE_declaration = 17;
VeeParser.RULE_extraction = 18;
VeeParser.RULE_alias = 19;
VeeParser.RULE_condition = 20;
VeeParser.RULE_match = 21;
VeeParser.RULE_pattern = 22;
VeeParser.RULE_capture = 23;
VeeParser.RULE_mapPairPattern = 24;
VeeParser.RULE_recPairPattern = 25;
VeeParser.RULE_rest = 26;
VeeParser.RULE_lambdaParams = 27;
VeeParser.RULE_lambdaBody = 28;
VeeParser.RULE_operators = 29;
VeeParser.RULE_binaryOperators = 30;
VeeParser.RULE_unaryOperators = 31;

function RootContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VeeParser.RULE_root;
    return this;
}

RootContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RootContext.prototype.constructor = RootContext;

RootContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

RootContext.prototype.EOF = function() {
    return this.getToken(VeeParser.EOF, 0);
};

RootContext.prototype.setup = function() {
    return this.getTypedRuleContext(SetupContext,0);
};

RootContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VeeVisitor ) {
        return visitor.visitRoot(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VeeParser.RootContext = RootContext;

VeeParser.prototype.root = function() {

    var localctx = new RootContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, VeeParser.RULE_root);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 65;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===VeeParser.Let || _la===VeeParser.Type) {
            this.state = 64;
            this.setup();
        }

        this.state = 67;
        this.expression(0);
        this.state = 68;
        this.match(VeeParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SetupContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VeeParser.RULE_setup;
    return this;
}

SetupContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SetupContext.prototype.constructor = SetupContext;

SetupContext.prototype.typeDefs = function() {
    return this.getTypedRuleContext(TypeDefsContext,0);
};

SetupContext.prototype.In = function() {
    return this.getToken(VeeParser.In, 0);
};

SetupContext.prototype.declarations = function() {
    return this.getTypedRuleContext(DeclarationsContext,0);
};

SetupContext.prototype.Comma = function() {
    return this.getToken(VeeParser.Comma, 0);
};

SetupContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VeeVisitor ) {
        return visitor.visitSetup(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VeeParser.SetupContext = SetupContext;

VeeParser.prototype.setup = function() {

    var localctx = new SetupContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, VeeParser.RULE_setup);
    var _la = 0; // Token type
    try {
        this.state = 80;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 70;
            this.typeDefs();
            this.state = 71;
            this.match(VeeParser.In);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 73;
            this.declarations();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 74;
            this.typeDefs();
            this.state = 76;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===VeeParser.Comma) {
                this.state = 75;
                this.match(VeeParser.Comma);
            }

            this.state = 78;
            this.declarations();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TypeDefsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VeeParser.RULE_typeDefs;
    return this;
}

TypeDefsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeDefsContext.prototype.constructor = TypeDefsContext;

TypeDefsContext.prototype.Type = function() {
    return this.getToken(VeeParser.Type, 0);
};

TypeDefsContext.prototype.typeDef = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TypeDefContext);
    } else {
        return this.getTypedRuleContext(TypeDefContext,i);
    }
};

TypeDefsContext.prototype.Comma = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VeeParser.Comma);
    } else {
        return this.getToken(VeeParser.Comma, i);
    }
};


TypeDefsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VeeVisitor ) {
        return visitor.visitTypeDefs(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VeeParser.TypeDefsContext = TypeDefsContext;

VeeParser.prototype.typeDefs = function() {

    var localctx = new TypeDefsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, VeeParser.RULE_typeDefs);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 82;
        this.match(VeeParser.Type);
        this.state = 83;
        this.typeDef();
        this.state = 88;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 84;
                this.match(VeeParser.Comma);
                this.state = 85;
                this.typeDef(); 
            }
            this.state = 90;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TypeDefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VeeParser.RULE_typeDef;
    return this;
}

TypeDefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeDefContext.prototype.constructor = TypeDefContext;

TypeDefContext.prototype.Name = function() {
    return this.getToken(VeeParser.Name, 0);
};

TypeDefContext.prototype.Colon = function() {
    return this.getToken(VeeParser.Colon, 0);
};

TypeDefContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

TypeDefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VeeVisitor ) {
        return visitor.visitTypeDef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VeeParser.TypeDefContext = TypeDefContext;

VeeParser.prototype.typeDef = function() {

    var localctx = new TypeDefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, VeeParser.RULE_typeDef);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 91;
        this.match(VeeParser.Name);
        this.state = 92;
        this.match(VeeParser.Colon);
        this.state = 93;
        this.type(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VeeParser.RULE_type;
    return this;
}

TypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeContext.prototype.constructor = TypeContext;


 
TypeContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function NamedTypeContext(parser, ctx) {
	TypeContext.call(this, parser);
    TypeContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NamedTypeContext.prototype = Object.create(TypeContext.prototype);
NamedTypeContext.prototype.constructor = NamedTypeContext;

VeeParser.NamedTypeContext = NamedTypeContext;

NamedTypeContext.prototype.Name = function() {
    return this.getToken(VeeParser.Name, 0);
};
NamedTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VeeVisitor ) {
        return visitor.visitNamedType(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BasicTypeContext(parser, ctx) {
	TypeContext.call(this, parser);
    TypeContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BasicTypeContext.prototype = Object.create(TypeContext.prototype);
BasicTypeContext.prototype.constructor = BasicTypeContext;

VeeParser.BasicTypeContext = BasicTypeContext;

BasicTypeContext.prototype.typeName = function() {
    return this.getTypedRuleContext(TypeNameContext,0);
};
BasicTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VeeVisitor ) {
        return visitor.visitBasicType(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AliasTypeContext(parser, ctx) {
	TypeContext.call(this, parser);
    TypeContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AliasTypeContext.prototype = Object.create(TypeContext.prototype);
AliasTypeContext.prototype.constructor = AliasTypeContext;

VeeParser.AliasTypeContext = AliasTypeContext;

AliasTypeContext.prototype.Name = function() {
    return this.getToken(VeeParser.Name, 0);
};

AliasTypeContext.prototype.Colon = function() {
    return this.getToken(VeeParser.Colon, 0);
};

AliasTypeContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};
AliasTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VeeVisitor ) {
        return visitor.visitAliasType(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function FunctionTypeContext(parser, ctx) {
	TypeContext.call(this, parser);
    TypeContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FunctionTypeContext.prototype = Object.create(TypeContext.prototype);
FunctionTypeContext.prototype.constructor = FunctionTypeContext;

VeeParser.FunctionTypeContext = FunctionTypeContext;

FunctionTypeContext.prototype.type = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TypeContext);
    } else {
        return this.getTypedRuleContext(TypeContext,i);
    }
};

FunctionTypeContext.prototype.Arrow = function() {
    return this.getToken(VeeParser.Arrow, 0);
};
FunctionTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VeeVisitor ) {
        return visitor.visitFunctionType(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ParameterizedTypeContext(parser, ctx) {
	TypeContext.call(this, parser);
    TypeContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParameterizedTypeContext.prototype = Object.create(TypeContext.prototype);
ParameterizedTypeContext.prototype.constructor = ParameterizedTypeContext;

VeeParser.ParameterizedTypeContext = ParameterizedTypeContext;

ParameterizedTypeContext.prototype.type = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TypeContext);
    } else {
        return this.getTypedRuleContext(TypeContext,i);
    }
};

ParameterizedTypeContext.prototype.LParen = function() {
    return this.getToken(VeeParser.LParen, 0);
};

ParameterizedTypeContext.prototype.RParen = function() {
    return this.getToken(VeeParser.RParen, 0);
};
ParameterizedTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VeeVisitor ) {
        return visitor.visitParameterizedType(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function SumTypeContext(parser, ctx) {
	TypeContext.call(this, parser);
    TypeContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SumTypeContext.prototype = Object.create(TypeContext.prototype);
SumTypeContext.prototype.constructor = SumTypeContext;

VeeParser.SumTypeContext = SumTypeContext;

SumTypeContext.prototype.type = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TypeContext);
    } else {
        return this.getTypedRuleContext(TypeContext,i);
    }
};

SumTypeContext.prototype.Pipe = function() {
    return this.getToken(VeeParser.Pipe, 0);
};
SumTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VeeVisitor ) {
        return visitor.visitSumType(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ProductTypeContext(parser, ctx) {
	TypeContext.call(this, parser);
    TypeContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ProductTypeContext.prototype = Object.create(TypeContext.prototype);
ProductTypeContext.prototype.constructor = ProductTypeContext;

VeeParser.ProductTypeContext = ProductTypeContext;

ProductTypeContext.prototype.type = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TypeContext);
    } else {
        return this.getTypedRuleContext(TypeContext,i);
    }
};

ProductTypeContext.prototype.Comma = function() {
    return this.getToken(VeeParser.Comma, 0);
};
ProductTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VeeVisitor ) {
        return visitor.visitProductType(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function OpenTypeContext(parser, ctx) {
	TypeContext.call(this, parser);
    TypeContext.prototype.copyFrom.call(this, ctx);
    return this;
}

OpenTypeContext.prototype = Object.create(TypeContext.prototype);
OpenTypeContext.prototype.constructor = OpenTypeContext;

VeeParser.OpenTypeContext = OpenTypeContext;

OpenTypeContext.prototype.OpenTypeParam = function() {
    return this.getToken(VeeParser.OpenTypeParam, 0);
};
OpenTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VeeVisitor ) {
        return visitor.visitOpenType(this);
    } else {
        return visitor.visitChildren(this);
    }
};



VeeParser.prototype.type = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new TypeContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 8;
    this.enterRecursionRule(localctx, 8, VeeParser.RULE_type, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 102;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
        switch(la_) {
        case 1:
            localctx = new BasicTypeContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 96;
            this.typeName();
            break;

        case 2:
            localctx = new NamedTypeContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 97;
            this.match(VeeParser.Name);
            break;

        case 3:
            localctx = new OpenTypeContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 98;
            this.match(VeeParser.OpenTypeParam);
            break;

        case 4:
            localctx = new AliasTypeContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 99;
            this.match(VeeParser.Name);
            this.state = 100;
            this.match(VeeParser.Colon);
            this.state = 101;
            this.type(2);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 120;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 118;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new FunctionTypeContext(this, new TypeContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, VeeParser.RULE_type);
                    this.state = 104;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 105;
                    this.match(VeeParser.Arrow);
                    this.state = 106;
                    this.type(6);
                    break;

                case 2:
                    localctx = new SumTypeContext(this, new TypeContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, VeeParser.RULE_type);
                    this.state = 107;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 108;
                    this.match(VeeParser.Pipe);
                    this.state = 109;
                    this.type(5);
                    break;

                case 3:
                    localctx = new ProductTypeContext(this, new TypeContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, VeeParser.RULE_type);
                    this.state = 110;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 111;
                    this.match(VeeParser.Comma);
                    this.state = 112;
                    this.type(4);
                    break;

                case 4:
                    localctx = new ParameterizedTypeContext(this, new TypeContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, VeeParser.RULE_type);
                    this.state = 113;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 114;
                    this.match(VeeParser.LParen);
                    this.state = 115;
                    this.type(0);
                    this.state = 116;
                    this.match(VeeParser.RParen);
                    break;

                } 
            }
            this.state = 122;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function TypeNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VeeParser.RULE_typeName;
    return this;
}

TypeNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeNameContext.prototype.constructor = TypeNameContext;

TypeNameContext.prototype.StringType = function() {
    return this.getToken(VeeParser.StringType, 0);
};

TypeNameContext.prototype.NumberType = function() {
    return this.getToken(VeeParser.NumberType, 0);
};

TypeNameContext.prototype.BooleanType = function() {
    return this.getToken(VeeParser.BooleanType, 0);
};

TypeNameContext.prototype.ListType = function() {
    return this.getToken(VeeParser.ListType, 0);
};

TypeNameContext.prototype.MapType = function() {
    return this.getToken(VeeParser.MapType, 0);
};

TypeNameContext.prototype.TupleType = function() {
    return this.getToken(VeeParser.TupleType, 0);
};

TypeNameContext.prototype.RecordType = function() {
    return this.getToken(VeeParser.RecordType, 0);
};

TypeNameContext.prototype.EnumType = function() {
    return this.getToken(VeeParser.EnumType, 0);
};

TypeNameContext.prototype.TaskType = function() {
    return this.getToken(VeeParser.TaskType, 0);
};

TypeNameContext.prototype.OptionType = function() {
    return this.getToken(VeeParser.OptionType, 0);
};

TypeNameContext.prototype.UnitType = function() {
    return this.getToken(VeeParser.UnitType, 0);
};

TypeNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VeeVisitor ) {
        return visitor.visitTypeName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VeeParser.TypeNameContext = TypeNameContext;

VeeParser.prototype.typeName = function() {

    var localctx = new TypeNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, VeeParser.RULE_typeName);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 123;
        _la = this._input.LA(1);
        if(!(((((_la - 45)) & ~0x1f) == 0 && ((1 << (_la - 45)) & ((1 << (VeeParser.StringType - 45)) | (1 << (VeeParser.NumberType - 45)) | (1 << (VeeParser.BooleanType - 45)) | (1 << (VeeParser.EnumType - 45)) | (1 << (VeeParser.TupleType - 45)) | (1 << (VeeParser.RecordType - 45)) | (1 << (VeeParser.ListType - 45)) | (1 << (VeeParser.MapType - 45)) | (1 << (VeeParser.TaskType - 45)) | (1 << (VeeParser.OptionType - 45)) | (1 << (VeeParser.UnitType - 45)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VeeParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;


 
ExpressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function PatternMathchingContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PatternMathchingContext.prototype = Object.create(ExpressionContext.prototype);
PatternMathchingContext.prototype.constructor = PatternMathchingContext;

VeeParser.PatternMathchingContext = PatternMathchingContext;

PatternMathchingContext.prototype.If = function() {
    return this.getToken(VeeParser.If, 0);
};

PatternMathchingContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

PatternMathchingContext.prototype.Is = function() {
    return this.getToken(VeeParser.Is, 0);
};

PatternMathchingContext.prototype.match = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MatchContext);
    } else {
        return this.getTypedRuleContext(MatchContext,i);
    }
};

PatternMathchingContext.prototype.Pipe = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VeeParser.Pipe);
    } else {
        return this.getToken(VeeParser.Pipe, i);
    }
};


PatternMathchingContext.prototype.Else = function() {
    return this.getToken(VeeParser.Else, 0);
};
PatternMathchingContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VeeVisitor ) {
        return visitor.visitPatternMathching(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AccessContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AccessContext.prototype = Object.create(ExpressionContext.prototype);
AccessContext.prototype.constructor = AccessContext;

VeeParser.AccessContext = AccessContext;

AccessContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

AccessContext.prototype.Dot = function() {
    return this.getToken(VeeParser.Dot, 0);
};

AccessContext.prototype.member = function() {
    return this.getTypedRuleContext(MemberContext,0);
};
AccessContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VeeVisitor ) {
        return visitor.visitAccess(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ConditionalContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ConditionalContext.prototype = Object.create(ExpressionContext.prototype);
ConditionalContext.prototype.constructor = ConditionalContext;

VeeParser.ConditionalContext = ConditionalContext;

ConditionalContext.prototype.If = function() {
    return this.getToken(VeeParser.If, 0);
};

ConditionalContext.prototype.condition = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ConditionContext);
    } else {
        return this.getTypedRuleContext(ConditionContext,i);
    }
};

ConditionalContext.prototype.Else = function() {
    return this.getToken(VeeParser.Else, 0);
};

ConditionalContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ConditionalContext.prototype.Pipe = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VeeParser.Pipe);
    } else {
        return this.getToken(VeeParser.Pipe, i);
    }
};

ConditionalContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VeeVisitor ) {
        return visitor.visitConditional(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function UnaryContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.op = null; // Token;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

UnaryContext.prototype = Object.create(ExpressionContext.prototype);
UnaryContext.prototype.constructor = UnaryContext;

VeeParser.UnaryContext = UnaryContext;

UnaryContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

UnaryContext.prototype.Plus = function() {
    return this.getToken(VeeParser.Plus, 0);
};

UnaryContext.prototype.Minus = function() {
    return this.getToken(VeeParser.Minus, 0);
};
UnaryContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VeeVisitor ) {
        return visitor.visitUnary(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function MultiplicativeContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.l = null; // ExpressionContext;
    this.op = null; // Token;
    this.r = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MultiplicativeContext.prototype = Object.create(ExpressionContext.prototype);
MultiplicativeContext.prototype.constructor = MultiplicativeContext;

VeeParser.MultiplicativeContext = MultiplicativeContext;

MultiplicativeContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

MultiplicativeContext.prototype.Multiply = function() {
    return this.getToken(VeeParser.Multiply, 0);
};

MultiplicativeContext.prototype.Divide = function() {
    return this.getToken(VeeParser.Divide, 0);
};

MultiplicativeContext.prototype.Modulo = function() {
    return this.getToken(VeeParser.Modulo, 0);
};
MultiplicativeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VeeVisitor ) {
        return visitor.visitMultiplicative(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function TupleContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TupleContext.prototype = Object.create(ExpressionContext.prototype);
TupleContext.prototype.constructor = TupleContext;

VeeParser.TupleContext = TupleContext;

TupleContext.prototype.LParen = function() {
    return this.getToken(VeeParser.LParen, 0);
};

TupleContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

TupleContext.prototype.RParen = function() {
    return this.getToken(VeeParser.RParen, 0);
};

TupleContext.prototype.Comma = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VeeParser.Comma);
    } else {
        return this.getToken(VeeParser.Comma, i);
    }
};

TupleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VeeVisitor ) {
        return visitor.visitTuple(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function LambdaContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LambdaContext.prototype = Object.create(ExpressionContext.prototype);
LambdaContext.prototype.constructor = LambdaContext;

VeeParser.LambdaContext = LambdaContext;

LambdaContext.prototype.Lambda = function() {
    return this.getToken(VeeParser.Lambda, 0);
};

LambdaContext.prototype.LParen = function() {
    return this.getToken(VeeParser.LParen, 0);
};

LambdaContext.prototype.lambdaParams = function() {
    return this.getTypedRuleContext(LambdaParamsContext,0);
};

LambdaContext.prototype.RParen = function() {
    return this.getToken(VeeParser.RParen, 0);
};

LambdaContext.prototype.Arrow = function() {
    return this.getToken(VeeParser.Arrow, 0);
};

LambdaContext.prototype.lambdaBody = function() {
    return this.getTypedRuleContext(LambdaBodyContext,0);
};
LambdaContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VeeVisitor ) {
        return visitor.visitLambda(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function RecordContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

RecordContext.prototype = Object.create(ExpressionContext.prototype);
RecordContext.prototype.constructor = RecordContext;

VeeParser.RecordContext = RecordContext;

RecordContext.prototype.LBrace = function() {
    return this.getToken(VeeParser.LBrace, 0);
};

RecordContext.prototype.recordPair = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(RecordPairContext);
    } else {
        return this.getTypedRuleContext(RecordPairContext,i);
    }
};

RecordContext.prototype.RBrace = function() {
    return this.getToken(VeeParser.RBrace, 0);
};

RecordContext.prototype.Comma = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VeeParser.Comma);
    } else {
        return this.getToken(VeeParser.Comma, i);
    }
};

RecordContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VeeVisitor ) {
        return visitor.visitRecord(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function PipeContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.l = null; // ExpressionContext;
    this.op = null; // Token;
    this.r = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PipeContext.prototype = Object.create(ExpressionContext.prototype);
PipeContext.prototype.constructor = PipeContext;

VeeParser.PipeContext = PipeContext;

PipeContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

PipeContext.prototype.RPipe = function() {
    return this.getToken(VeeParser.RPipe, 0);
};
PipeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VeeVisitor ) {
        return visitor.visitPipe(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ValueContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ValueContext.prototype = Object.create(ExpressionContext.prototype);
ValueContext.prototype.constructor = ValueContext;

VeeParser.ValueContext = ValueContext;

ValueContext.prototype.constant = function() {
    return this.getTypedRuleContext(ConstantContext,0);
};
ValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VeeVisitor ) {
        return visitor.visitValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function MapContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MapContext.prototype = Object.create(ExpressionContext.prototype);
MapContext.prototype.constructor = MapContext;

VeeParser.MapContext = MapContext;

MapContext.prototype.LBrace = function() {
    return this.getToken(VeeParser.LBrace, 0);
};

MapContext.prototype.RBrace = function() {
    return this.getToken(VeeParser.RBrace, 0);
};

MapContext.prototype.mapItems = function() {
    return this.getTypedRuleContext(MapItemsContext,0);
};

MapContext.prototype.mapType = function() {
    return this.getTypedRuleContext(MapTypeContext,0);
};
MapContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VeeVisitor ) {
        return visitor.visitMap(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function EqualityContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.l = null; // ExpressionContext;
    this.op = null; // Token;
    this.r = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EqualityContext.prototype = Object.create(ExpressionContext.prototype);
EqualityContext.prototype.constructor = EqualityContext;

VeeParser.EqualityContext = EqualityContext;

EqualityContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

EqualityContext.prototype.Eq = function() {
    return this.getToken(VeeParser.Eq, 0);
};

EqualityContext.prototype.Neq = function() {
    return this.getToken(VeeParser.Neq, 0);
};
EqualityContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VeeVisitor ) {
        return visitor.visitEquality(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function TypeofContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.op = null; // Token;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TypeofContext.prototype = Object.create(ExpressionContext.prototype);
TypeofContext.prototype.constructor = TypeofContext;

VeeParser.TypeofContext = TypeofContext;

TypeofContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

TypeofContext.prototype.TypeOf = function() {
    return this.getToken(VeeParser.TypeOf, 0);
};
TypeofContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VeeVisitor ) {
        return visitor.visitTypeof(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function CombinationContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.l = null; // ExpressionContext;
    this.op = null; // Token;
    this.r = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CombinationContext.prototype = Object.create(ExpressionContext.prototype);
CombinationContext.prototype.constructor = CombinationContext;

VeeParser.CombinationContext = CombinationContext;

CombinationContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

CombinationContext.prototype.Combine = function() {
    return this.getToken(VeeParser.Combine, 0);
};
CombinationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VeeVisitor ) {
        return visitor.visitCombination(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function LogicalNotContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.op = null; // Token;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LogicalNotContext.prototype = Object.create(ExpressionContext.prototype);
LogicalNotContext.prototype.constructor = LogicalNotContext;

VeeParser.LogicalNotContext = LogicalNotContext;

LogicalNotContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

LogicalNotContext.prototype.Not = function() {
    return this.getToken(VeeParser.Not, 0);
};
LogicalNotContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VeeVisitor ) {
        return visitor.visitLogicalNot(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ListContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ListContext.prototype = Object.create(ExpressionContext.prototype);
ListContext.prototype.constructor = ListContext;

VeeParser.ListContext = ListContext;

ListContext.prototype.LBracket = function() {
    return this.getToken(VeeParser.LBracket, 0);
};

ListContext.prototype.RBracket = function() {
    return this.getToken(VeeParser.RBracket, 0);
};

ListContext.prototype.nums = function() {
    return this.getTypedRuleContext(NumsContext,0);
};

ListContext.prototype.listItems = function() {
    return this.getTypedRuleContext(ListItemsContext,0);
};

ListContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};
ListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VeeVisitor ) {
        return visitor.visitList(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ComparisionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.l = null; // ExpressionContext;
    this.op = null; // Token;
    this.r = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ComparisionContext.prototype = Object.create(ExpressionContext.prototype);
ComparisionContext.prototype.constructor = ComparisionContext;

VeeParser.ComparisionContext = ComparisionContext;

ComparisionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ComparisionContext.prototype.Lt = function() {
    return this.getToken(VeeParser.Lt, 0);
};

ComparisionContext.prototype.Lte = function() {
    return this.getToken(VeeParser.Lte, 0);
};

ComparisionContext.prototype.Gt = function() {
    return this.getToken(VeeParser.Gt, 0);
};

ComparisionContext.prototype.Gte = function() {
    return this.getToken(VeeParser.Gte, 0);
};
ComparisionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VeeVisitor ) {
        return visitor.visitComparision(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function GroupingContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

GroupingContext.prototype = Object.create(ExpressionContext.prototype);
GroupingContext.prototype.constructor = GroupingContext;

VeeParser.GroupingContext = GroupingContext;

GroupingContext.prototype.LParen = function() {
    return this.getToken(VeeParser.LParen, 0);
};

GroupingContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

GroupingContext.prototype.RParen = function() {
    return this.getToken(VeeParser.RParen, 0);
};
GroupingContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VeeVisitor ) {
        return visitor.visitGrouping(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function LogicalContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.l = null; // ExpressionContext;
    this.op = null; // Token;
    this.r = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LogicalContext.prototype = Object.create(ExpressionContext.prototype);
LogicalContext.prototype.constructor = LogicalContext;

VeeParser.LogicalContext = LogicalContext;

LogicalContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

LogicalContext.prototype.AndAlso = function() {
    return this.getToken(VeeParser.AndAlso, 0);
};

LogicalContext.prototype.OrElse = function() {
    return this.getToken(VeeParser.OrElse, 0);
};
LogicalContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VeeVisitor ) {
        return visitor.visitLogical(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function OperatorLambdaContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

OperatorLambdaContext.prototype = Object.create(ExpressionContext.prototype);
OperatorLambdaContext.prototype.constructor = OperatorLambdaContext;

VeeParser.OperatorLambdaContext = OperatorLambdaContext;

OperatorLambdaContext.prototype.Pipe = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VeeParser.Pipe);
    } else {
        return this.getToken(VeeParser.Pipe, i);
    }
};


OperatorLambdaContext.prototype.operators = function() {
    return this.getTypedRuleContext(OperatorsContext,0);
};
OperatorLambdaContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VeeVisitor ) {
        return visitor.visitOperatorLambda(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AdditiveContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.l = null; // ExpressionContext;
    this.op = null; // Token;
    this.r = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AdditiveContext.prototype = Object.create(ExpressionContext.prototype);
AdditiveContext.prototype.constructor = AdditiveContext;

VeeParser.AdditiveContext = AdditiveContext;

AdditiveContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

AdditiveContext.prototype.Plus = function() {
    return this.getToken(VeeParser.Plus, 0);
};

AdditiveContext.prototype.Minus = function() {
    return this.getToken(VeeParser.Minus, 0);
};
AdditiveContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VeeVisitor ) {
        return visitor.visitAdditive(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function FunctionCombinationContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.l = null; // ExpressionContext;
    this.op = null; // Token;
    this.r = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FunctionCombinationContext.prototype = Object.create(ExpressionContext.prototype);
FunctionCombinationContext.prototype.constructor = FunctionCombinationContext;

VeeParser.FunctionCombinationContext = FunctionCombinationContext;

FunctionCombinationContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

FunctionCombinationContext.prototype.CombineF = function() {
    return this.getToken(VeeParser.CombineF, 0);
};
FunctionCombinationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VeeVisitor ) {
        return visitor.visitFunctionCombination(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ExponentiationContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.l = null; // ExpressionContext;
    this.op = null; // Token;
    this.r = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExponentiationContext.prototype = Object.create(ExpressionContext.prototype);
ExponentiationContext.prototype.constructor = ExponentiationContext;

VeeParser.ExponentiationContext = ExponentiationContext;

ExponentiationContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ExponentiationContext.prototype.Pow = function() {
    return this.getToken(VeeParser.Pow, 0);
};
ExponentiationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VeeVisitor ) {
        return visitor.visitExponentiation(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function InvocationContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

InvocationContext.prototype = Object.create(ExpressionContext.prototype);
InvocationContext.prototype.constructor = InvocationContext;

VeeParser.InvocationContext = InvocationContext;

InvocationContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

InvocationContext.prototype.LParen = function() {
    return this.getToken(VeeParser.LParen, 0);
};

InvocationContext.prototype.RParen = function() {
    return this.getToken(VeeParser.RParen, 0);
};

InvocationContext.prototype.argument = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ArgumentContext);
    } else {
        return this.getTypedRuleContext(ArgumentContext,i);
    }
};

InvocationContext.prototype.Comma = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VeeParser.Comma);
    } else {
        return this.getToken(VeeParser.Comma, i);
    }
};

InvocationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VeeVisitor ) {
        return visitor.visitInvocation(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function VariableContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

VariableContext.prototype = Object.create(ExpressionContext.prototype);
VariableContext.prototype.constructor = VariableContext;

VeeParser.VariableContext = VariableContext;

VariableContext.prototype.Name = function() {
    return this.getToken(VeeParser.Name, 0);
};
VariableContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VeeVisitor ) {
        return visitor.visitVariable(this);
    } else {
        return visitor.visitChildren(this);
    }
};



VeeParser.prototype.expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 12;
    this.enterRecursionRule(localctx, 12, VeeParser.RULE_expression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 215;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
        switch(la_) {
        case 1:
            localctx = new ValueContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 126;
            this.constant();
            break;

        case 2:
            localctx = new VariableContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 127;
            this.match(VeeParser.Name);
            break;

        case 3:
            localctx = new TupleContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 128;
            this.match(VeeParser.LParen);
            this.state = 129;
            this.expression(0);
            this.state = 132; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 130;
                this.match(VeeParser.Comma);
                this.state = 131;
                this.expression(0);
                this.state = 134; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===VeeParser.Comma);
            this.state = 136;
            this.match(VeeParser.RParen);
            break;

        case 4:
            localctx = new RecordContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 138;
            this.match(VeeParser.LBrace);
            this.state = 139;
            this.recordPair();
            this.state = 144;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===VeeParser.Comma) {
                this.state = 140;
                this.match(VeeParser.Comma);
                this.state = 141;
                this.recordPair();
                this.state = 146;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 147;
            this.match(VeeParser.RBrace);
            break;

        case 5:
            localctx = new MapContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 149;
            this.match(VeeParser.LBrace);
            this.state = 152;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
            switch(la_) {
            case 1:
                this.state = 150;
                this.mapItems();
                break;

            case 2:
                this.state = 151;
                this.mapType();
                break;

            }
            this.state = 154;
            this.match(VeeParser.RBrace);
            break;

        case 6:
            localctx = new ListContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 156;
            this.match(VeeParser.LBracket);
            this.state = 160;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
            switch(la_) {
            case 1:
                this.state = 157;
                this.nums();
                break;

            case 2:
                this.state = 158;
                this.listItems();
                break;

            case 3:
                this.state = 159;
                this.type(0);
                break;

            }
            this.state = 162;
            this.match(VeeParser.RBracket);
            break;

        case 7:
            localctx = new GroupingContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 164;
            this.match(VeeParser.LParen);
            this.state = 165;
            this.expression(0);
            this.state = 166;
            this.match(VeeParser.RParen);
            break;

        case 8:
            localctx = new LogicalNotContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 168;
            localctx.op = this.match(VeeParser.Not);
            this.state = 169;
            this.expression(16);
            break;

        case 9:
            localctx = new UnaryContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 170;
            localctx.op = this._input.LT(1);
            _la = this._input.LA(1);
            if(!(_la===VeeParser.Plus || _la===VeeParser.Minus)) {
                localctx.op = this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 171;
            this.expression(15);
            break;

        case 10:
            localctx = new TypeofContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 172;
            localctx.op = this.match(VeeParser.TypeOf);
            this.state = 173;
            this.expression(14);
            break;

        case 11:
            localctx = new OperatorLambdaContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 174;
            this.match(VeeParser.Pipe);
            this.state = 175;
            this.operators();
            this.state = 176;
            this.match(VeeParser.Pipe);
            break;

        case 12:
            localctx = new LambdaContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 178;
            this.match(VeeParser.Lambda);
            this.state = 179;
            this.match(VeeParser.LParen);
            this.state = 180;
            this.lambdaParams();
            this.state = 181;
            this.match(VeeParser.RParen);
            this.state = 182;
            this.match(VeeParser.Arrow);
            this.state = 183;
            this.lambdaBody();
            break;

        case 13:
            localctx = new ConditionalContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 185;
            this.match(VeeParser.If);
            this.state = 186;
            this.condition();
            this.state = 191;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===VeeParser.Pipe) {
                this.state = 187;
                this.match(VeeParser.Pipe);
                this.state = 188;
                this.condition();
                this.state = 193;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 194;
            this.match(VeeParser.Else);
            this.state = 195;
            this.expression(2);
            break;

        case 14:
            localctx = new PatternMathchingContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 197;
            this.match(VeeParser.If);
            this.state = 198;
            this.expression(0);
            this.state = 199;
            this.match(VeeParser.Is);
            this.state = 201;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===VeeParser.Pipe) {
                this.state = 200;
                this.match(VeeParser.Pipe);
            }

            this.state = 203;
            this.match();
            this.state = 208;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 204;
                    this.match(VeeParser.Pipe);
                    this.state = 205;
                    this.match(); 
                }
                this.state = 210;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
            }

            this.state = 213;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
            if(la_===1) {
                this.state = 211;
                this.match(VeeParser.Else);
                this.state = 212;
                this.expression(0);

            }
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 262;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,19,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 260;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExponentiationContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    localctx.l = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, VeeParser.RULE_expression);
                    this.state = 217;
                    if (!( this.precpred(this._ctx, 13))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                    }
                    this.state = 218;
                    localctx.op = this.match(VeeParser.Pow);
                    this.state = 219;
                    localctx.r = this.expression(14);
                    break;

                case 2:
                    localctx = new MultiplicativeContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    localctx.l = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, VeeParser.RULE_expression);
                    this.state = 220;
                    if (!( this.precpred(this._ctx, 12))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                    }
                    this.state = 221;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << VeeParser.Multiply) | (1 << VeeParser.Divide) | (1 << VeeParser.Modulo))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 222;
                    localctx.r = this.expression(13);
                    break;

                case 3:
                    localctx = new AdditiveContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    localctx.l = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, VeeParser.RULE_expression);
                    this.state = 223;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 224;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===VeeParser.Plus || _la===VeeParser.Minus)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 225;
                    localctx.r = this.expression(12);
                    break;

                case 4:
                    localctx = new EqualityContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    localctx.l = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, VeeParser.RULE_expression);
                    this.state = 226;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 227;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===VeeParser.Eq || _la===VeeParser.Neq)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 228;
                    localctx.r = this.expression(11);
                    break;

                case 5:
                    localctx = new ComparisionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    localctx.l = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, VeeParser.RULE_expression);
                    this.state = 229;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 230;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << VeeParser.Lt) | (1 << VeeParser.Gt) | (1 << VeeParser.Lte) | (1 << VeeParser.Gte))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 231;
                    localctx.r = this.expression(10);
                    break;

                case 6:
                    localctx = new LogicalContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    localctx.l = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, VeeParser.RULE_expression);
                    this.state = 232;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 233;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===VeeParser.AndAlso || _la===VeeParser.OrElse)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 234;
                    localctx.r = this.expression(9);
                    break;

                case 7:
                    localctx = new CombinationContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    localctx.l = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, VeeParser.RULE_expression);
                    this.state = 235;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 236;
                    localctx.op = this.match(VeeParser.Combine);
                    this.state = 237;
                    localctx.r = this.expression(8);
                    break;

                case 8:
                    localctx = new FunctionCombinationContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    localctx.l = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, VeeParser.RULE_expression);
                    this.state = 238;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 239;
                    localctx.op = this.match(VeeParser.CombineF);
                    this.state = 240;
                    localctx.r = this.expression(7);
                    break;

                case 9:
                    localctx = new PipeContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    localctx.l = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, VeeParser.RULE_expression);
                    this.state = 241;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 242;
                    localctx.op = this.match(VeeParser.RPipe);
                    this.state = 243;
                    localctx.r = this.expression(6);
                    break;

                case 10:
                    localctx = new AccessContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, VeeParser.RULE_expression);
                    this.state = 244;
                    if (!( this.precpred(this._ctx, 18))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 18)");
                    }
                    this.state = 245;
                    this.match(VeeParser.Dot);
                    this.state = 246;
                    this.member();
                    break;

                case 11:
                    localctx = new InvocationContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, VeeParser.RULE_expression);
                    this.state = 247;
                    if (!( this.precpred(this._ctx, 17))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 17)");
                    }
                    this.state = 248;
                    this.match(VeeParser.LParen);
                    this.state = 250;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << VeeParser.LBracket) | (1 << VeeParser.LBrace) | (1 << VeeParser.LParen) | (1 << VeeParser.Lambda) | (1 << VeeParser.Plus) | (1 << VeeParser.Minus) | (1 << VeeParser.Pipe) | (1 << VeeParser.Not))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (VeeParser.TypeOf - 32)) | (1 << (VeeParser.If - 32)) | (1 << (VeeParser.True - 32)) | (1 << (VeeParser.False - 32)) | (1 << (VeeParser.Number - 32)) | (1 << (VeeParser.Name - 32)) | (1 << (VeeParser.OpenTypeParam - 32)) | (1 << (VeeParser.String - 32)))) !== 0)) {
                        this.state = 249;
                        this.argument();
                    }

                    this.state = 256;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while(_la===VeeParser.Comma) {
                        this.state = 252;
                        this.match(VeeParser.Comma);
                        this.state = 253;
                        this.argument();
                        this.state = 258;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 259;
                    this.match(VeeParser.RParen);
                    break;

                } 
            }
            this.state = 264;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,19,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function ConstantContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VeeParser.RULE_constant;
    return this;
}

ConstantContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConstantContext.prototype.constructor = ConstantContext;

ConstantContext.prototype.True = function() {
    return this.getToken(VeeParser.True, 0);
};

ConstantContext.prototype.False = function() {
    return this.getToken(VeeParser.False, 0);
};

ConstantContext.prototype.Number = function() {
    return this.getToken(VeeParser.Number, 0);
};

ConstantContext.prototype.String = function() {
    return this.getToken(VeeParser.String, 0);
};

ConstantContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VeeVisitor ) {
        return visitor.visitConstant(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VeeParser.ConstantContext = ConstantContext;

VeeParser.prototype.constant = function() {

    var localctx = new ConstantContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, VeeParser.RULE_constant);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 265;
        _la = this._input.LA(1);
        if(!(((((_la - 40)) & ~0x1f) == 0 && ((1 << (_la - 40)) & ((1 << (VeeParser.True - 40)) | (1 << (VeeParser.False - 40)) | (1 << (VeeParser.Number - 40)) | (1 << (VeeParser.String - 40)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NumsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VeeParser.RULE_nums;
    this.from = null; // Token
    this.to = null; // Token
    return this;
}

NumsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumsContext.prototype.constructor = NumsContext;

NumsContext.prototype.Range = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VeeParser.Range);
    } else {
        return this.getToken(VeeParser.Range, i);
    }
};


NumsContext.prototype.Number = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VeeParser.Number);
    } else {
        return this.getToken(VeeParser.Number, i);
    }
};


NumsContext.prototype.Plus = function() {
    return this.getToken(VeeParser.Plus, 0);
};

NumsContext.prototype.Minus = function() {
    return this.getToken(VeeParser.Minus, 0);
};

NumsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VeeVisitor ) {
        return visitor.visitNums(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VeeParser.NumsContext = NumsContext;

VeeParser.prototype.nums = function() {

    var localctx = new NumsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, VeeParser.RULE_nums);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 267;
        localctx.from = this.match(VeeParser.Number);
        this.state = 268;
        this.match(VeeParser.Range);
        this.state = 272;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===VeeParser.Plus || _la===VeeParser.Minus) {
            this.state = 269;
            _la = this._input.LA(1);
            if(!(_la===VeeParser.Plus || _la===VeeParser.Minus)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 270;
            this.match(VeeParser.Number);
            this.state = 271;
            this.match(VeeParser.Range);
        }

        this.state = 274;
        localctx.to = this.match(VeeParser.Number);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RecordPairContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VeeParser.RULE_recordPair;
    return this;
}

RecordPairContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RecordPairContext.prototype.constructor = RecordPairContext;

RecordPairContext.prototype.Name = function() {
    return this.getToken(VeeParser.Name, 0);
};

RecordPairContext.prototype.Colon = function() {
    return this.getToken(VeeParser.Colon, 0);
};

RecordPairContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

RecordPairContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VeeVisitor ) {
        return visitor.visitRecordPair(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VeeParser.RecordPairContext = RecordPairContext;

VeeParser.prototype.recordPair = function() {

    var localctx = new RecordPairContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, VeeParser.RULE_recordPair);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 276;
        this.match(VeeParser.Name);
        this.state = 277;
        this.match(VeeParser.Colon);
        this.state = 278;
        this.expression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MapItemsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VeeParser.RULE_mapItems;
    return this;
}

MapItemsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MapItemsContext.prototype.constructor = MapItemsContext;

MapItemsContext.prototype.mapPair = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MapPairContext);
    } else {
        return this.getTypedRuleContext(MapPairContext,i);
    }
};

MapItemsContext.prototype.Comma = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VeeParser.Comma);
    } else {
        return this.getToken(VeeParser.Comma, i);
    }
};


MapItemsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VeeVisitor ) {
        return visitor.visitMapItems(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VeeParser.MapItemsContext = MapItemsContext;

VeeParser.prototype.mapItems = function() {

    var localctx = new MapItemsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, VeeParser.RULE_mapItems);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 280;
        this.mapPair();
        this.state = 285;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===VeeParser.Comma) {
            this.state = 281;
            this.match(VeeParser.Comma);
            this.state = 282;
            this.mapPair();
            this.state = 287;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MapPairContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VeeParser.RULE_mapPair;
    return this;
}

MapPairContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MapPairContext.prototype.constructor = MapPairContext;

MapPairContext.prototype.LBracket = function() {
    return this.getToken(VeeParser.LBracket, 0);
};

MapPairContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

MapPairContext.prototype.RBracket = function() {
    return this.getToken(VeeParser.RBracket, 0);
};

MapPairContext.prototype.Colon = function() {
    return this.getToken(VeeParser.Colon, 0);
};

MapPairContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VeeVisitor ) {
        return visitor.visitMapPair(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VeeParser.MapPairContext = MapPairContext;

VeeParser.prototype.mapPair = function() {

    var localctx = new MapPairContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, VeeParser.RULE_mapPair);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 288;
        this.match(VeeParser.LBracket);
        this.state = 289;
        this.expression(0);
        this.state = 290;
        this.match(VeeParser.RBracket);
        this.state = 291;
        this.match(VeeParser.Colon);
        this.state = 292;
        this.expression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MapTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VeeParser.RULE_mapType;
    return this;
}

MapTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MapTypeContext.prototype.constructor = MapTypeContext;

MapTypeContext.prototype.LBracket = function() {
    return this.getToken(VeeParser.LBracket, 0);
};

MapTypeContext.prototype.type = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TypeContext);
    } else {
        return this.getTypedRuleContext(TypeContext,i);
    }
};

MapTypeContext.prototype.RBracket = function() {
    return this.getToken(VeeParser.RBracket, 0);
};

MapTypeContext.prototype.Colon = function() {
    return this.getToken(VeeParser.Colon, 0);
};

MapTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VeeVisitor ) {
        return visitor.visitMapType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VeeParser.MapTypeContext = MapTypeContext;

VeeParser.prototype.mapType = function() {

    var localctx = new MapTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, VeeParser.RULE_mapType);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 294;
        this.match(VeeParser.LBracket);
        this.state = 295;
        this.type(0);
        this.state = 296;
        this.match(VeeParser.RBracket);
        this.state = 297;
        this.match(VeeParser.Colon);
        this.state = 298;
        this.type(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ListItemsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VeeParser.RULE_listItems;
    return this;
}

ListItemsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ListItemsContext.prototype.constructor = ListItemsContext;

ListItemsContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ListItemsContext.prototype.Comma = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VeeParser.Comma);
    } else {
        return this.getToken(VeeParser.Comma, i);
    }
};


ListItemsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VeeVisitor ) {
        return visitor.visitListItems(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VeeParser.ListItemsContext = ListItemsContext;

VeeParser.prototype.listItems = function() {

    var localctx = new ListItemsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, VeeParser.RULE_listItems);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 300;
        this.expression(0);
        this.state = 305;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===VeeParser.Comma) {
            this.state = 301;
            this.match(VeeParser.Comma);
            this.state = 302;
            this.expression(0);
            this.state = 307;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MemberContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VeeParser.RULE_member;
    return this;
}

MemberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MemberContext.prototype.constructor = MemberContext;

MemberContext.prototype.LBracket = function() {
    return this.getToken(VeeParser.LBracket, 0);
};

MemberContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

MemberContext.prototype.RBracket = function() {
    return this.getToken(VeeParser.RBracket, 0);
};

MemberContext.prototype.Name = function() {
    return this.getToken(VeeParser.Name, 0);
};

MemberContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VeeVisitor ) {
        return visitor.visitMember(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VeeParser.MemberContext = MemberContext;

VeeParser.prototype.member = function() {

    var localctx = new MemberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, VeeParser.RULE_member);
    try {
        this.state = 313;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case VeeParser.LBracket:
            this.enterOuterAlt(localctx, 1);
            this.state = 308;
            this.match(VeeParser.LBracket);
            this.state = 309;
            this.expression(0);
            this.state = 310;
            this.match(VeeParser.RBracket);
            break;
        case VeeParser.Name:
            this.enterOuterAlt(localctx, 2);
            this.state = 312;
            this.match(VeeParser.Name);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ArgumentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VeeParser.RULE_argument;
    return this;
}

ArgumentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArgumentContext.prototype.constructor = ArgumentContext;

ArgumentContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ArgumentContext.prototype.Name = function() {
    return this.getToken(VeeParser.Name, 0);
};

ArgumentContext.prototype.Colon = function() {
    return this.getToken(VeeParser.Colon, 0);
};

ArgumentContext.prototype.OpenTypeParam = function() {
    return this.getToken(VeeParser.OpenTypeParam, 0);
};

ArgumentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VeeVisitor ) {
        return visitor.visitArgument(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VeeParser.ArgumentContext = ArgumentContext;

VeeParser.prototype.argument = function() {

    var localctx = new ArgumentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, VeeParser.RULE_argument);
    try {
        this.state = 321;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case VeeParser.LBracket:
        case VeeParser.LBrace:
        case VeeParser.LParen:
        case VeeParser.Lambda:
        case VeeParser.Plus:
        case VeeParser.Minus:
        case VeeParser.Pipe:
        case VeeParser.Not:
        case VeeParser.TypeOf:
        case VeeParser.If:
        case VeeParser.True:
        case VeeParser.False:
        case VeeParser.Number:
        case VeeParser.Name:
        case VeeParser.String:
            this.enterOuterAlt(localctx, 1);
            this.state = 317;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
            if(la_===1) {
                this.state = 315;
                this.match(VeeParser.Name);
                this.state = 316;
                this.match(VeeParser.Colon);

            }
            this.state = 319;
            this.expression(0);
            break;
        case VeeParser.OpenTypeParam:
            this.enterOuterAlt(localctx, 2);
            this.state = 320;
            this.match(VeeParser.OpenTypeParam);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DeclarationsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VeeParser.RULE_declarations;
    return this;
}

DeclarationsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeclarationsContext.prototype.constructor = DeclarationsContext;

DeclarationsContext.prototype.Let = function() {
    return this.getToken(VeeParser.Let, 0);
};

DeclarationsContext.prototype.declaration = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DeclarationContext);
    } else {
        return this.getTypedRuleContext(DeclarationContext,i);
    }
};

DeclarationsContext.prototype.In = function() {
    return this.getToken(VeeParser.In, 0);
};

DeclarationsContext.prototype.Comma = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VeeParser.Comma);
    } else {
        return this.getToken(VeeParser.Comma, i);
    }
};


DeclarationsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VeeVisitor ) {
        return visitor.visitDeclarations(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VeeParser.DeclarationsContext = DeclarationsContext;

VeeParser.prototype.declarations = function() {

    var localctx = new DeclarationsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, VeeParser.RULE_declarations);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 323;
        this.match(VeeParser.Let);
        this.state = 324;
        this.declaration();
        this.state = 329;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,26,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 325;
                this.match(VeeParser.Comma);
                this.state = 326;
                this.declaration(); 
            }
            this.state = 331;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,26,this._ctx);
        }

        this.state = 333;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===VeeParser.Comma) {
            this.state = 332;
            this.match(VeeParser.Comma);
        }

        this.state = 335;
        this.match(VeeParser.In);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VeeParser.RULE_declaration;
    return this;
}

DeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeclarationContext.prototype.constructor = DeclarationContext;

DeclarationContext.prototype.Colon = function() {
    return this.getToken(VeeParser.Colon, 0);
};

DeclarationContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

DeclarationContext.prototype.Name = function() {
    return this.getToken(VeeParser.Name, 0);
};

DeclarationContext.prototype.extraction = function() {
    return this.getTypedRuleContext(ExtractionContext,0);
};

DeclarationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VeeVisitor ) {
        return visitor.visitDeclaration(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VeeParser.DeclarationContext = DeclarationContext;

VeeParser.prototype.declaration = function() {

    var localctx = new DeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, VeeParser.RULE_declaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 339;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case VeeParser.Name:
            this.state = 337;
            this.match(VeeParser.Name);
            break;
        case VeeParser.LBrace:
        case VeeParser.LParen:
            this.state = 338;
            this.extraction();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 341;
        this.match(VeeParser.Colon);
        this.state = 342;
        this.expression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExtractionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VeeParser.RULE_extraction;
    return this;
}

ExtractionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExtractionContext.prototype.constructor = ExtractionContext;


 
ExtractionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function RecordExtractionContext(parser, ctx) {
	ExtractionContext.call(this, parser);
    ExtractionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

RecordExtractionContext.prototype = Object.create(ExtractionContext.prototype);
RecordExtractionContext.prototype.constructor = RecordExtractionContext;

VeeParser.RecordExtractionContext = RecordExtractionContext;

RecordExtractionContext.prototype.LBrace = function() {
    return this.getToken(VeeParser.LBrace, 0);
};

RecordExtractionContext.prototype.Name = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VeeParser.Name);
    } else {
        return this.getToken(VeeParser.Name, i);
    }
};


RecordExtractionContext.prototype.RBrace = function() {
    return this.getToken(VeeParser.RBrace, 0);
};

RecordExtractionContext.prototype.alias = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AliasContext);
    } else {
        return this.getTypedRuleContext(AliasContext,i);
    }
};

RecordExtractionContext.prototype.Comma = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VeeParser.Comma);
    } else {
        return this.getToken(VeeParser.Comma, i);
    }
};

RecordExtractionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VeeVisitor ) {
        return visitor.visitRecordExtraction(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function TupleExtractionContext(parser, ctx) {
	ExtractionContext.call(this, parser);
    ExtractionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TupleExtractionContext.prototype = Object.create(ExtractionContext.prototype);
TupleExtractionContext.prototype.constructor = TupleExtractionContext;

VeeParser.TupleExtractionContext = TupleExtractionContext;

TupleExtractionContext.prototype.LParen = function() {
    return this.getToken(VeeParser.LParen, 0);
};

TupleExtractionContext.prototype.Name = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VeeParser.Name);
    } else {
        return this.getToken(VeeParser.Name, i);
    }
};


TupleExtractionContext.prototype.RParen = function() {
    return this.getToken(VeeParser.RParen, 0);
};

TupleExtractionContext.prototype.Comma = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VeeParser.Comma);
    } else {
        return this.getToken(VeeParser.Comma, i);
    }
};

TupleExtractionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VeeVisitor ) {
        return visitor.visitTupleExtraction(this);
    } else {
        return visitor.visitChildren(this);
    }
};



VeeParser.ExtractionContext = ExtractionContext;

VeeParser.prototype.extraction = function() {

    var localctx = new ExtractionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, VeeParser.RULE_extraction);
    var _la = 0; // Token type
    try {
        this.state = 367;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case VeeParser.LParen:
            localctx = new TupleExtractionContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 344;
            this.match(VeeParser.LParen);
            this.state = 345;
            this.match(VeeParser.Name);
            this.state = 348; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 346;
                this.match(VeeParser.Comma);
                this.state = 347;
                this.match(VeeParser.Name);
                this.state = 350; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===VeeParser.Comma);
            this.state = 352;
            this.match(VeeParser.RParen);
            break;
        case VeeParser.LBrace:
            localctx = new RecordExtractionContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 353;
            this.match(VeeParser.LBrace);
            this.state = 354;
            this.match(VeeParser.Name);
            this.state = 356;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===VeeParser.As) {
                this.state = 355;
                this.alias();
            }

            this.state = 363;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===VeeParser.Comma) {
                this.state = 358;
                this.match(VeeParser.Comma);
                this.state = 359;
                this.match(VeeParser.Name);
                this.state = 360;
                this.alias();
                this.state = 365;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 366;
            this.match(VeeParser.RBrace);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AliasContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VeeParser.RULE_alias;
    return this;
}

AliasContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AliasContext.prototype.constructor = AliasContext;

AliasContext.prototype.As = function() {
    return this.getToken(VeeParser.As, 0);
};

AliasContext.prototype.Name = function() {
    return this.getToken(VeeParser.Name, 0);
};

AliasContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VeeVisitor ) {
        return visitor.visitAlias(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VeeParser.AliasContext = AliasContext;

VeeParser.prototype.alias = function() {

    var localctx = new AliasContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, VeeParser.RULE_alias);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 369;
        this.match(VeeParser.As);
        this.state = 370;
        this.match(VeeParser.Name);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ConditionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VeeParser.RULE_condition;
    return this;
}

ConditionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConditionContext.prototype.constructor = ConditionContext;

ConditionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ConditionContext.prototype.Then = function() {
    return this.getToken(VeeParser.Then, 0);
};

ConditionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VeeVisitor ) {
        return visitor.visitCondition(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VeeParser.ConditionContext = ConditionContext;

VeeParser.prototype.condition = function() {

    var localctx = new ConditionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, VeeParser.RULE_condition);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 372;
        this.expression(0);
        this.state = 373;
        this.match(VeeParser.Then);
        this.state = 374;
        this.expression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MatchContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VeeParser.RULE_match;
    return this;
}

MatchContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MatchContext.prototype.constructor = MatchContext;

MatchContext.prototype.pattern = function() {
    return this.getTypedRuleContext(PatternContext,0);
};

MatchContext.prototype.Then = function() {
    return this.getToken(VeeParser.Then, 0);
};

MatchContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

MatchContext.prototype.When = function() {
    return this.getToken(VeeParser.When, 0);
};

MatchContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VeeVisitor ) {
        return visitor.visitMatch(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VeeParser.MatchContext = MatchContext;

VeeParser.prototype.match = function() {

    var localctx = new MatchContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, VeeParser.RULE_match);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 376;
        this.pattern();
        this.state = 379;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===VeeParser.When) {
            this.state = 377;
            this.match(VeeParser.When);
            this.state = 378;
            this.expression(0);
        }

        this.state = 381;
        this.match(VeeParser.Then);
        this.state = 382;
        this.expression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PatternContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VeeParser.RULE_pattern;
    return this;
}

PatternContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PatternContext.prototype.constructor = PatternContext;


 
PatternContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function ListPatternContext(parser, ctx) {
	PatternContext.call(this, parser);
    PatternContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ListPatternContext.prototype = Object.create(PatternContext.prototype);
ListPatternContext.prototype.constructor = ListPatternContext;

VeeParser.ListPatternContext = ListPatternContext;

ListPatternContext.prototype.LBracket = function() {
    return this.getToken(VeeParser.LBracket, 0);
};

ListPatternContext.prototype.RBracket = function() {
    return this.getToken(VeeParser.RBracket, 0);
};

ListPatternContext.prototype.capture = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(CaptureContext);
    } else {
        return this.getTypedRuleContext(CaptureContext,i);
    }
};

ListPatternContext.prototype.Comma = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VeeParser.Comma);
    } else {
        return this.getToken(VeeParser.Comma, i);
    }
};


ListPatternContext.prototype.rest = function() {
    return this.getTypedRuleContext(RestContext,0);
};
ListPatternContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VeeVisitor ) {
        return visitor.visitListPattern(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function TuplePatternContext(parser, ctx) {
	PatternContext.call(this, parser);
    PatternContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TuplePatternContext.prototype = Object.create(PatternContext.prototype);
TuplePatternContext.prototype.constructor = TuplePatternContext;

VeeParser.TuplePatternContext = TuplePatternContext;

TuplePatternContext.prototype.LParen = function() {
    return this.getToken(VeeParser.LParen, 0);
};

TuplePatternContext.prototype.capture = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(CaptureContext);
    } else {
        return this.getTypedRuleContext(CaptureContext,i);
    }
};

TuplePatternContext.prototype.RParen = function() {
    return this.getToken(VeeParser.RParen, 0);
};

TuplePatternContext.prototype.Comma = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VeeParser.Comma);
    } else {
        return this.getToken(VeeParser.Comma, i);
    }
};


TuplePatternContext.prototype.rest = function() {
    return this.getTypedRuleContext(RestContext,0);
};
TuplePatternContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VeeVisitor ) {
        return visitor.visitTuplePattern(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function TypePatternContext(parser, ctx) {
	PatternContext.call(this, parser);
    PatternContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TypePatternContext.prototype = Object.create(PatternContext.prototype);
TypePatternContext.prototype.constructor = TypePatternContext;

VeeParser.TypePatternContext = TypePatternContext;

TypePatternContext.prototype.Name = function() {
    return this.getToken(VeeParser.Name, 0);
};

TypePatternContext.prototype.LParen = function() {
    return this.getToken(VeeParser.LParen, 0);
};

TypePatternContext.prototype.capture = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(CaptureContext);
    } else {
        return this.getTypedRuleContext(CaptureContext,i);
    }
};

TypePatternContext.prototype.RParen = function() {
    return this.getToken(VeeParser.RParen, 0);
};

TypePatternContext.prototype.Comma = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VeeParser.Comma);
    } else {
        return this.getToken(VeeParser.Comma, i);
    }
};

TypePatternContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VeeVisitor ) {
        return visitor.visitTypePattern(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function RecordPatternContext(parser, ctx) {
	PatternContext.call(this, parser);
    PatternContext.prototype.copyFrom.call(this, ctx);
    return this;
}

RecordPatternContext.prototype = Object.create(PatternContext.prototype);
RecordPatternContext.prototype.constructor = RecordPatternContext;

VeeParser.RecordPatternContext = RecordPatternContext;

RecordPatternContext.prototype.LBrace = function() {
    return this.getToken(VeeParser.LBrace, 0);
};

RecordPatternContext.prototype.recPairPattern = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(RecPairPatternContext);
    } else {
        return this.getTypedRuleContext(RecPairPatternContext,i);
    }
};

RecordPatternContext.prototype.RBrace = function() {
    return this.getToken(VeeParser.RBrace, 0);
};

RecordPatternContext.prototype.Comma = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VeeParser.Comma);
    } else {
        return this.getToken(VeeParser.Comma, i);
    }
};


RecordPatternContext.prototype.rest = function() {
    return this.getTypedRuleContext(RestContext,0);
};
RecordPatternContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VeeVisitor ) {
        return visitor.visitRecordPattern(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ConstantPatternContext(parser, ctx) {
	PatternContext.call(this, parser);
    PatternContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ConstantPatternContext.prototype = Object.create(PatternContext.prototype);
ConstantPatternContext.prototype.constructor = ConstantPatternContext;

VeeParser.ConstantPatternContext = ConstantPatternContext;

ConstantPatternContext.prototype.constant = function() {
    return this.getTypedRuleContext(ConstantContext,0);
};
ConstantPatternContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VeeVisitor ) {
        return visitor.visitConstantPattern(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function MapPatternContext(parser, ctx) {
	PatternContext.call(this, parser);
    PatternContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MapPatternContext.prototype = Object.create(PatternContext.prototype);
MapPatternContext.prototype.constructor = MapPatternContext;

VeeParser.MapPatternContext = MapPatternContext;

MapPatternContext.prototype.LBrace = function() {
    return this.getToken(VeeParser.LBrace, 0);
};

MapPatternContext.prototype.RBrace = function() {
    return this.getToken(VeeParser.RBrace, 0);
};

MapPatternContext.prototype.mapPairPattern = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MapPairPatternContext);
    } else {
        return this.getTypedRuleContext(MapPairPatternContext,i);
    }
};

MapPatternContext.prototype.Comma = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VeeParser.Comma);
    } else {
        return this.getToken(VeeParser.Comma, i);
    }
};


MapPatternContext.prototype.rest = function() {
    return this.getTypedRuleContext(RestContext,0);
};
MapPatternContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VeeVisitor ) {
        return visitor.visitMapPattern(this);
    } else {
        return visitor.visitChildren(this);
    }
};



VeeParser.PatternContext = PatternContext;

VeeParser.prototype.pattern = function() {

    var localctx = new PatternContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, VeeParser.RULE_pattern);
    var _la = 0; // Token type
    try {
        this.state = 461;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,46,this._ctx);
        switch(la_) {
        case 1:
            localctx = new TuplePatternContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 384;
            this.match(VeeParser.LParen);
            this.state = 385;
            this.capture();
            this.state = 390;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,34,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 386;
                    this.match(VeeParser.Comma);
                    this.state = 387;
                    this.capture(); 
                }
                this.state = 392;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,34,this._ctx);
            }

            this.state = 395;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===VeeParser.Comma) {
                this.state = 393;
                this.match(VeeParser.Comma);
                this.state = 394;
                this.rest();
            }

            this.state = 397;
            this.match(VeeParser.RParen);
            break;

        case 2:
            localctx = new RecordPatternContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 399;
            this.match(VeeParser.LBrace);
            this.state = 400;
            this.recPairPattern();
            this.state = 405;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,36,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 401;
                    this.match(VeeParser.Comma);
                    this.state = 402;
                    this.recPairPattern(); 
                }
                this.state = 407;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,36,this._ctx);
            }

            this.state = 410;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===VeeParser.Comma) {
                this.state = 408;
                this.match(VeeParser.Comma);
                this.state = 409;
                this.rest();
            }

            this.state = 412;
            this.match(VeeParser.RBrace);
            break;

        case 3:
            localctx = new ListPatternContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 414;
            this.match(VeeParser.LBracket);
            this.state = 416;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << VeeParser.LBracket) | (1 << VeeParser.LBrace) | (1 << VeeParser.LParen))) !== 0) || ((((_la - 40)) & ~0x1f) == 0 && ((1 << (_la - 40)) & ((1 << (VeeParser.True - 40)) | (1 << (VeeParser.False - 40)) | (1 << (VeeParser.StringType - 40)) | (1 << (VeeParser.NumberType - 40)) | (1 << (VeeParser.BooleanType - 40)) | (1 << (VeeParser.EnumType - 40)) | (1 << (VeeParser.TupleType - 40)) | (1 << (VeeParser.RecordType - 40)) | (1 << (VeeParser.ListType - 40)) | (1 << (VeeParser.MapType - 40)) | (1 << (VeeParser.TaskType - 40)) | (1 << (VeeParser.OptionType - 40)) | (1 << (VeeParser.UnitType - 40)) | (1 << (VeeParser.Number - 40)) | (1 << (VeeParser.Name - 40)) | (1 << (VeeParser.OpenTypeParam - 40)) | (1 << (VeeParser.String - 40)))) !== 0)) {
                this.state = 415;
                this.capture();
            }

            this.state = 422;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,39,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 418;
                    this.match(VeeParser.Comma);
                    this.state = 419;
                    this.capture(); 
                }
                this.state = 424;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,39,this._ctx);
            }

            this.state = 427;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===VeeParser.Comma) {
                this.state = 425;
                this.match(VeeParser.Comma);
                this.state = 426;
                this.rest();
            }

            this.state = 429;
            this.match(VeeParser.RBracket);
            break;

        case 4:
            localctx = new MapPatternContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 430;
            this.match(VeeParser.LBrace);
            this.state = 432;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===VeeParser.LBracket) {
                this.state = 431;
                this.mapPairPattern();
            }

            this.state = 438;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,42,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 434;
                    this.match(VeeParser.Comma);
                    this.state = 435;
                    this.mapPairPattern(); 
                }
                this.state = 440;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,42,this._ctx);
            }

            this.state = 443;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===VeeParser.Comma) {
                this.state = 441;
                this.match(VeeParser.Comma);
                this.state = 442;
                this.rest();
            }

            this.state = 445;
            this.match(VeeParser.RBrace);
            break;

        case 5:
            localctx = new TypePatternContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 446;
            this.match(VeeParser.Name);
            this.state = 458;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===VeeParser.LParen) {
                this.state = 447;
                this.match(VeeParser.LParen);
                this.state = 448;
                this.capture();
                this.state = 453;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while(_la===VeeParser.Comma) {
                    this.state = 449;
                    this.match(VeeParser.Comma);
                    this.state = 450;
                    this.capture();
                    this.state = 455;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 456;
                this.match(VeeParser.RParen);
            }

            break;

        case 6:
            localctx = new ConstantPatternContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 460;
            this.constant();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CaptureContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VeeParser.RULE_capture;
    return this;
}

CaptureContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CaptureContext.prototype.constructor = CaptureContext;


 
CaptureContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function TypeCaptureContext(parser, ctx) {
	CaptureContext.call(this, parser);
    CaptureContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TypeCaptureContext.prototype = Object.create(CaptureContext.prototype);
TypeCaptureContext.prototype.constructor = TypeCaptureContext;

VeeParser.TypeCaptureContext = TypeCaptureContext;

TypeCaptureContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

TypeCaptureContext.prototype.alias = function() {
    return this.getTypedRuleContext(AliasContext,0);
};
TypeCaptureContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VeeVisitor ) {
        return visitor.visitTypeCapture(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function SubPatternCaptureContext(parser, ctx) {
	CaptureContext.call(this, parser);
    CaptureContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SubPatternCaptureContext.prototype = Object.create(CaptureContext.prototype);
SubPatternCaptureContext.prototype.constructor = SubPatternCaptureContext;

VeeParser.SubPatternCaptureContext = SubPatternCaptureContext;

SubPatternCaptureContext.prototype.pattern = function() {
    return this.getTypedRuleContext(PatternContext,0);
};
SubPatternCaptureContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VeeVisitor ) {
        return visitor.visitSubPatternCapture(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function VariableCaptureContext(parser, ctx) {
	CaptureContext.call(this, parser);
    CaptureContext.prototype.copyFrom.call(this, ctx);
    return this;
}

VariableCaptureContext.prototype = Object.create(CaptureContext.prototype);
VariableCaptureContext.prototype.constructor = VariableCaptureContext;

VeeParser.VariableCaptureContext = VariableCaptureContext;

VariableCaptureContext.prototype.Name = function() {
    return this.getToken(VeeParser.Name, 0);
};
VariableCaptureContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VeeVisitor ) {
        return visitor.visitVariableCapture(this);
    } else {
        return visitor.visitChildren(this);
    }
};



VeeParser.CaptureContext = CaptureContext;

VeeParser.prototype.capture = function() {

    var localctx = new CaptureContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, VeeParser.RULE_capture);
    var _la = 0; // Token type
    try {
        this.state = 469;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,48,this._ctx);
        switch(la_) {
        case 1:
            localctx = new VariableCaptureContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 463;
            this.match(VeeParser.Name);
            break;

        case 2:
            localctx = new SubPatternCaptureContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 464;
            this.pattern();
            break;

        case 3:
            localctx = new TypeCaptureContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 465;
            this.type(0);
            this.state = 467;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===VeeParser.As) {
                this.state = 466;
                this.alias();
            }

            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MapPairPatternContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VeeParser.RULE_mapPairPattern;
    return this;
}

MapPairPatternContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MapPairPatternContext.prototype.constructor = MapPairPatternContext;

MapPairPatternContext.prototype.LBracket = function() {
    return this.getToken(VeeParser.LBracket, 0);
};

MapPairPatternContext.prototype.constant = function() {
    return this.getTypedRuleContext(ConstantContext,0);
};

MapPairPatternContext.prototype.RBracket = function() {
    return this.getToken(VeeParser.RBracket, 0);
};

MapPairPatternContext.prototype.Colon = function() {
    return this.getToken(VeeParser.Colon, 0);
};

MapPairPatternContext.prototype.capture = function() {
    return this.getTypedRuleContext(CaptureContext,0);
};

MapPairPatternContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VeeVisitor ) {
        return visitor.visitMapPairPattern(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VeeParser.MapPairPatternContext = MapPairPatternContext;

VeeParser.prototype.mapPairPattern = function() {

    var localctx = new MapPairPatternContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, VeeParser.RULE_mapPairPattern);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 471;
        this.match(VeeParser.LBracket);
        this.state = 472;
        this.constant();
        this.state = 473;
        this.match(VeeParser.RBracket);
        this.state = 476;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===VeeParser.Colon) {
            this.state = 474;
            this.match(VeeParser.Colon);
            this.state = 475;
            this.capture();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RecPairPatternContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VeeParser.RULE_recPairPattern;
    return this;
}

RecPairPatternContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RecPairPatternContext.prototype.constructor = RecPairPatternContext;

RecPairPatternContext.prototype.Name = function() {
    return this.getToken(VeeParser.Name, 0);
};

RecPairPatternContext.prototype.Colon = function() {
    return this.getToken(VeeParser.Colon, 0);
};

RecPairPatternContext.prototype.capture = function() {
    return this.getTypedRuleContext(CaptureContext,0);
};

RecPairPatternContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VeeVisitor ) {
        return visitor.visitRecPairPattern(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VeeParser.RecPairPatternContext = RecPairPatternContext;

VeeParser.prototype.recPairPattern = function() {

    var localctx = new RecPairPatternContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, VeeParser.RULE_recPairPattern);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 478;
        this.match(VeeParser.Name);
        this.state = 479;
        this.match(VeeParser.Colon);
        this.state = 480;
        this.capture();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RestContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VeeParser.RULE_rest;
    return this;
}

RestContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RestContext.prototype.constructor = RestContext;

RestContext.prototype.Range = function() {
    return this.getToken(VeeParser.Range, 0);
};

RestContext.prototype.Name = function() {
    return this.getToken(VeeParser.Name, 0);
};

RestContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VeeVisitor ) {
        return visitor.visitRest(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VeeParser.RestContext = RestContext;

VeeParser.prototype.rest = function() {

    var localctx = new RestContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, VeeParser.RULE_rest);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 482;
        this.match(VeeParser.Range);
        this.state = 483;
        this.match(VeeParser.Name);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LambdaParamsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VeeParser.RULE_lambdaParams;
    return this;
}

LambdaParamsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LambdaParamsContext.prototype.constructor = LambdaParamsContext;

LambdaParamsContext.prototype.Name = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VeeParser.Name);
    } else {
        return this.getToken(VeeParser.Name, i);
    }
};


LambdaParamsContext.prototype.Comma = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VeeParser.Comma);
    } else {
        return this.getToken(VeeParser.Comma, i);
    }
};


LambdaParamsContext.prototype.Colon = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VeeParser.Colon);
    } else {
        return this.getToken(VeeParser.Colon, i);
    }
};


LambdaParamsContext.prototype.type = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TypeContext);
    } else {
        return this.getTypedRuleContext(TypeContext,i);
    }
};

LambdaParamsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VeeVisitor ) {
        return visitor.visitLambdaParams(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VeeParser.LambdaParamsContext = LambdaParamsContext;

VeeParser.prototype.lambdaParams = function() {

    var localctx = new LambdaParamsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, VeeParser.RULE_lambdaParams);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 488;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===VeeParser.Name) {
            this.state = 485;
            this.match(VeeParser.Name);

            this.state = 486;
            this.match(VeeParser.Colon);
            this.state = 487;
            this.type(0);
        }

        this.state = 498;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===VeeParser.Comma) {
            this.state = 490;
            this.match(VeeParser.Comma);
            this.state = 491;
            this.match(VeeParser.Name);
            this.state = 494;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===VeeParser.Colon) {
                this.state = 492;
                this.match(VeeParser.Colon);
                this.state = 493;
                this.type(0);
            }

            this.state = 500;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LambdaBodyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VeeParser.RULE_lambdaBody;
    return this;
}

LambdaBodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LambdaBodyContext.prototype.constructor = LambdaBodyContext;

LambdaBodyContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

LambdaBodyContext.prototype.declarations = function() {
    return this.getTypedRuleContext(DeclarationsContext,0);
};

LambdaBodyContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VeeVisitor ) {
        return visitor.visitLambdaBody(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VeeParser.LambdaBodyContext = LambdaBodyContext;

VeeParser.prototype.lambdaBody = function() {

    var localctx = new LambdaBodyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, VeeParser.RULE_lambdaBody);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 502;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===VeeParser.Let) {
            this.state = 501;
            this.declarations();
        }

        this.state = 504;
        this.expression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OperatorsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VeeParser.RULE_operators;
    return this;
}

OperatorsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperatorsContext.prototype.constructor = OperatorsContext;

OperatorsContext.prototype.OpenTypeParam = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VeeParser.OpenTypeParam);
    } else {
        return this.getToken(VeeParser.OpenTypeParam, i);
    }
};


OperatorsContext.prototype.binaryOperators = function() {
    return this.getTypedRuleContext(BinaryOperatorsContext,0);
};

OperatorsContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

OperatorsContext.prototype.Colon = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VeeParser.Colon);
    } else {
        return this.getToken(VeeParser.Colon, i);
    }
};


OperatorsContext.prototype.type = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TypeContext);
    } else {
        return this.getTypedRuleContext(TypeContext,i);
    }
};

OperatorsContext.prototype.unaryOperators = function() {
    return this.getTypedRuleContext(UnaryOperatorsContext,0);
};

OperatorsContext.prototype.Dot = function() {
    return this.getToken(VeeParser.Dot, 0);
};

OperatorsContext.prototype.member = function() {
    return this.getTypedRuleContext(MemberContext,0);
};

OperatorsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VeeVisitor ) {
        return visitor.visitOperators(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VeeParser.OperatorsContext = OperatorsContext;

VeeParser.prototype.operators = function() {

    var localctx = new OperatorsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, VeeParser.RULE_operators);
    var _la = 0; // Token type
    try {
        this.state = 534;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,56,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 506;
            this.match(VeeParser.OpenTypeParam);
            this.state = 507;
            this.binaryOperators();
            this.state = 508;
            this.expression(0);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 510;
            this.expression(0);
            this.state = 511;
            this.binaryOperators();
            this.state = 512;
            this.match(VeeParser.OpenTypeParam);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 514;
            this.match(VeeParser.OpenTypeParam);
            this.state = 517;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===VeeParser.Colon) {
                this.state = 515;
                this.match(VeeParser.Colon);
                this.state = 516;
                this.type(0);
            }

            this.state = 519;
            this.binaryOperators();
            this.state = 520;
            this.match(VeeParser.OpenTypeParam);
            this.state = 523;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===VeeParser.Colon) {
                this.state = 521;
                this.match(VeeParser.Colon);
                this.state = 522;
                this.type(0);
            }

            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 525;
            this.unaryOperators();
            this.state = 526;
            this.match(VeeParser.OpenTypeParam);
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 528;
            this.match(VeeParser.OpenTypeParam);
            this.state = 529;
            this.match(VeeParser.Colon);
            this.state = 530;
            this.type(0);
            this.state = 531;
            this.match(VeeParser.Dot);
            this.state = 532;
            this.member();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BinaryOperatorsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VeeParser.RULE_binaryOperators;
    return this;
}

BinaryOperatorsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BinaryOperatorsContext.prototype.constructor = BinaryOperatorsContext;

BinaryOperatorsContext.prototype.Pow = function() {
    return this.getToken(VeeParser.Pow, 0);
};

BinaryOperatorsContext.prototype.Multiply = function() {
    return this.getToken(VeeParser.Multiply, 0);
};

BinaryOperatorsContext.prototype.Divide = function() {
    return this.getToken(VeeParser.Divide, 0);
};

BinaryOperatorsContext.prototype.Modulo = function() {
    return this.getToken(VeeParser.Modulo, 0);
};

BinaryOperatorsContext.prototype.Plus = function() {
    return this.getToken(VeeParser.Plus, 0);
};

BinaryOperatorsContext.prototype.Minus = function() {
    return this.getToken(VeeParser.Minus, 0);
};

BinaryOperatorsContext.prototype.Eq = function() {
    return this.getToken(VeeParser.Eq, 0);
};

BinaryOperatorsContext.prototype.Neq = function() {
    return this.getToken(VeeParser.Neq, 0);
};

BinaryOperatorsContext.prototype.AndAlso = function() {
    return this.getToken(VeeParser.AndAlso, 0);
};

BinaryOperatorsContext.prototype.OrElse = function() {
    return this.getToken(VeeParser.OrElse, 0);
};

BinaryOperatorsContext.prototype.Gte = function() {
    return this.getToken(VeeParser.Gte, 0);
};

BinaryOperatorsContext.prototype.Gt = function() {
    return this.getToken(VeeParser.Gt, 0);
};

BinaryOperatorsContext.prototype.Lt = function() {
    return this.getToken(VeeParser.Lt, 0);
};

BinaryOperatorsContext.prototype.Lte = function() {
    return this.getToken(VeeParser.Lte, 0);
};

BinaryOperatorsContext.prototype.Combine = function() {
    return this.getToken(VeeParser.Combine, 0);
};

BinaryOperatorsContext.prototype.CombineF = function() {
    return this.getToken(VeeParser.CombineF, 0);
};

BinaryOperatorsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VeeVisitor ) {
        return visitor.visitBinaryOperators(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VeeParser.BinaryOperatorsContext = BinaryOperatorsContext;

VeeParser.prototype.binaryOperators = function() {

    var localctx = new BinaryOperatorsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, VeeParser.RULE_binaryOperators);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 536;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << VeeParser.Pow) | (1 << VeeParser.Multiply) | (1 << VeeParser.Divide) | (1 << VeeParser.Modulo) | (1 << VeeParser.Plus) | (1 << VeeParser.Minus) | (1 << VeeParser.Eq) | (1 << VeeParser.Neq) | (1 << VeeParser.Lt) | (1 << VeeParser.Gt) | (1 << VeeParser.Lte) | (1 << VeeParser.Gte) | (1 << VeeParser.Combine) | (1 << VeeParser.CombineF) | (1 << VeeParser.AndAlso) | (1 << VeeParser.OrElse))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function UnaryOperatorsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VeeParser.RULE_unaryOperators;
    return this;
}

UnaryOperatorsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UnaryOperatorsContext.prototype.constructor = UnaryOperatorsContext;

UnaryOperatorsContext.prototype.Minus = function() {
    return this.getToken(VeeParser.Minus, 0);
};

UnaryOperatorsContext.prototype.Not = function() {
    return this.getToken(VeeParser.Not, 0);
};

UnaryOperatorsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VeeVisitor ) {
        return visitor.visitUnaryOperators(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VeeParser.UnaryOperatorsContext = UnaryOperatorsContext;

VeeParser.prototype.unaryOperators = function() {

    var localctx = new UnaryOperatorsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, VeeParser.RULE_unaryOperators);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 538;
        _la = this._input.LA(1);
        if(!(_la===VeeParser.Minus || _la===VeeParser.Not)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


VeeParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 4:
			return this.type_sempred(localctx, predIndex);
	case 6:
			return this.expression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

VeeParser.prototype.type_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 5);
		case 1:
			return this.precpred(this._ctx, 4);
		case 2:
			return this.precpred(this._ctx, 3);
		case 3:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

VeeParser.prototype.expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 4:
			return this.precpred(this._ctx, 13);
		case 5:
			return this.precpred(this._ctx, 12);
		case 6:
			return this.precpred(this._ctx, 11);
		case 7:
			return this.precpred(this._ctx, 10);
		case 8:
			return this.precpred(this._ctx, 9);
		case 9:
			return this.precpred(this._ctx, 8);
		case 10:
			return this.precpred(this._ctx, 7);
		case 11:
			return this.precpred(this._ctx, 6);
		case 12:
			return this.precpred(this._ctx, 5);
		case 13:
			return this.precpred(this._ctx, 18);
		case 14:
			return this.precpred(this._ctx, 17);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.VeeParser = VeeParser;
