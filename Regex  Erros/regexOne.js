// --- 1.Matching Characters
/a/.test("abcdef"); // true
/a/.test("abcde"); // true
/a/.test("abc"); // true

// --- 2.Matching Digits
/1/.test("abc123xyz"); // true
/1/.test('define "123"'); // true
/1/.test("var g = 123;"); // true

//--- 3.Matching With Wildcards
/\./.test("cat"); // true
/\./.test("896"); // true
/\./.test("?=+"); // true
/\./.test("abc1"); // false

//--- 4.Matching Characters
/[cmf]/.test("can"); // true
/[cmf]/.test("man"); // true
/[cmf]/.test("fan"); // true
/[cmf]/.test("dan"); // false
/[cmf]/.test("ran"); // false
/[cmf]/.test("pan"); // false

// --- 5.Excluding Characters
/[^bog]/.test("hog"); // true
/[^bog]/.test("dog"); // true
/[^bog]/.test("bog"); // false

//--- 6.Matching Character Ranges
/[ABC]/.test("Ana"); // true
/[ABC]/.test("Bob"); // true
/[ABC]/.test("Cpc"); // true
/[ABC]/.test("aax"); // false
/[ABC]/.test("bby"); // false
/[ABC]/.test("ccz"); // false

// --- 7.Matching Repeated Characters
/z{2}/.test("wazzzzzup"); // true
/z{2}/.test("wazzzup"); // true
/z{2}/.test("wazup"); // false

// --- 8.Matching Repeated Characters
/\D./.test("aaaabcc"); // true
/\D./.test("aabbbbc"); // true
/\D./.test("aacc"); // true
/\D./.test("a"); // false

// --- 9.Matching Optional Characters
/[?]/.test("1 file found?"); // true
/[?]/.test("2 files found?"); // true
/[?]/.test("24 files found?"); // true
/[?]/.test("No files found."); // false

// --- 10.Matching Whitespaces
/\s/.test("1.  abc"); // true
/\s/.test("2.    abc"); // true
/\s/.test("3.           abc"); // true
/\s/.test("4.abc"); // false

// --- 11.Matching Lines
/^M/.test("Mission: successful"); // true
/^M/.test("Last Mission: unsuccessful"); // false
/^M/.test("Next Mission: successful upon capture of target"); // false

// --- 12.Matching Groups
/^(file.+)\./.test("file_record_transcript.pdf"); // file_record_transcript
/^(file.+)\./.test("file_07241999.pdf"); // file_07241999
/^(file.+)\./.test("testfile_fake.pdf.tmp"); //

//--- 13.Matching Nested Groups
/(.+(\d{4}))/.test("Jan 1987"); // Jan 1987  1987
/(.+(\d{4}))/.test("May 1969"); // May 1969 1969
/(.+(\d{4}))/.test("Aug 2011"); // Aug 2011 2011

//--- 14. Matching Nested Groups
/(\d{4})x(\d+)/.test("1280x720"); // 1280  720
/(\d{4})x(\d+)/.test("1920x1600"); // 1920 1600
/(\d{4})x(\d+)/.test("1024x768"); // 1024   768

// --- 15.Matching Conditional Text
/(cats|dogs)/.test("I love cats"); // true
/(cats|dogs)/.test("I love dogs"); // true
/(cats|dogs)/.test("I love logs"); // false
/(cats|dogs)/.test("I love cogs"); // false

// --- 16.Matching Other Special Characters
/.*/.test("The quick brown fox jumps over the lazy dog."); // true
/.*/.test("There were 614 instances of students getting 90.0% or above."); // true
/.*/.test("The FCC had to censor the network for saying &$#*@!."); // true
