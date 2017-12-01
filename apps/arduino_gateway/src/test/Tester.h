#ifndef TESTER
#define TESTER

#include <Arduino.h>

class Tester {
public:
  Tester();
  void assert(int a, int b, String name);
  void assert(String expected, String actual, String name);

  void runAllTests();
  void testSerialReaderParser();
};

#endif
