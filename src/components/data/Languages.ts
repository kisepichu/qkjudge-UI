export interface Language {
  id: number
  label: string
  language: string
  language_code: string
  version: string
  version_index: string
}

const languages: Language[] = [
  {
    id: 0,
    label: 'C++ 17 / GCC 11.1.0',
    language: 'C++ 17',
    language_code: 'cpp17',
    version: 'GCC 11.1.0',
    version_index: '1'
  },
  {
    id: 1,
    label: 'Python 3 / 3.9.9',
    language: 'Python 3',
    language_code: 'python3',
    version: '3.9.9',
    version_index: '4'
  },
  {
    id: 2,
    label: 'Java / JDK 17.0.1',
    language: 'Java',
    language_code: 'java',
    version: 'JDK 17.0.1',
    version_index: '4'
  },
  {
    id: 3,
    label: 'Java / JDK 11.0.4',
    language: 'Java',
    language_code: 'java',
    version: 'JDK 11.0.4',
    version_index: '3'
  },
  {
    id: 4,
    label: 'Java / JDK 10.0.1',
    language: 'Java',
    language_code: 'java',
    version: 'JDK 10.0.1',
    version_index: '2'
  },
  {
    id: 5,
    label: 'Java / JDK 9.0.1',
    language: 'Java',
    language_code: 'java',
    version: 'JDK 9.0.1',
    version_index: '1'
  },
  {
    id: 6,
    label: 'Java / JDK 1.8.0_66',
    language: 'Java',
    language_code: 'java',
    version: 'JDK 1.8.0_66',
    version_index: '0'
  },
  {
    id: 7,
    label: 'C / GCC 11.1.0',
    language: 'C',
    language_code: 'c',
    version: 'GCC 11.1.0',
    version_index: '5'
  },
  {
    id: 8,
    label: 'C / GCC 9.1.0',
    language: 'C',
    language_code: 'c',
    version: 'GCC 9.1.0',
    version_index: '4'
  },
  {
    id: 9,
    label: 'C / GCC 8.1.0',
    language: 'C',
    language_code: 'c',
    version: 'GCC 8.1.0',
    version_index: '3'
  },
  {
    id: 10,
    label: 'C / GCC 7.2.0',
    language: 'C',
    language_code: 'c',
    version: 'GCC 7.2.0',
    version_index: '2'
  },
  {
    id: 11,
    label: 'C / Zapcc 5.0.0',
    language: 'C',
    language_code: 'c',
    version: 'Zapcc 5.0.0',
    version_index: '1'
  },
  {
    id: 12,
    label: 'C / GCC 5.3.0',
    language: 'C',
    language_code: 'c',
    version: 'GCC 5.3.0',
    version_index: '0'
  },
  {
    id: 13,
    label: 'C-99 / GCC 11.1.0',
    language: 'C-99',
    language_code: 'c99',
    version: 'GCC 11.1.0',
    version_index: '4'
  },
  {
    id: 14,
    label: 'C-99 / GCC 9.1.0',
    language: 'C-99',
    language_code: 'c99',
    version: 'GCC 9.1.0',
    version_index: '3'
  },
  {
    id: 15,
    label: 'C-99 / GCC 8.1.0',
    language: 'C-99',
    language_code: 'c99',
    version: 'GCC 8.1.0',
    version_index: '2'
  },
  {
    id: 16,
    label: 'C-99 / GCC 7.2.0',
    language: 'C-99',
    language_code: 'c99',
    version: 'GCC 7.2.0',
    version_index: '1'
  },
  {
    id: 17,
    label: 'C-99 / GCC 5.3.0',
    language: 'C-99',
    language_code: 'c99',
    version: 'GCC 5.3.0',
    version_index: '0'
  },
  {
    id: 18,
    label: 'C++ / GCC 11.1.0',
    language: 'C++',
    language_code: 'cpp',
    version: 'GCC 11.1.0',
    version_index: '5'
  },
  {
    id: 19,
    label: 'C++ / GCC 9.1.0',
    language: 'C++',
    language_code: 'cpp',
    version: 'GCC 9.1.0',
    version_index: '4'
  },
  {
    id: 20,
    label: 'C++ / GCC 8.1.0',
    language: 'C++',
    language_code: 'cpp',
    version: 'GCC 8.1.0',
    version_index: '3'
  },
  {
    id: 21,
    label: 'C++ / GCC 7.2.0',
    language: 'C++',
    language_code: 'cpp',
    version: 'GCC 7.2.0',
    version_index: '2'
  },
  {
    id: 22,
    label: 'C++ / Zapcc 5.0.0',
    language: 'C++',
    language_code: 'cpp',
    version: 'Zapcc 5.0.0',
    version_index: '1'
  },
  {
    id: 23,
    label: 'C++ / GCC 5.3.0',
    language: 'C++',
    language_code: 'cpp',
    version: 'GCC 5.3.0',
    version_index: '0'
  },
  {
    id: 24,
    label: 'C++ 14 / GCC 11.1.0',
    language: 'C++ 14',
    language_code: 'cpp14',
    version: 'GCC 11.1.0',
    version_index: '4'
  },
  {
    id: 25,
    label: 'C++ 14 / g++ 14 GCC 9.1.0',
    language: 'C++ 14',
    language_code: 'cpp14',
    version: 'g++ 14 GCC 9.1.0',
    version_index: '3'
  },
  {
    id: 26,
    label: 'C++ 14 / g++ 14 GCC 8.1.0',
    language: 'C++ 14',
    language_code: 'cpp14',
    version: 'g++ 14 GCC 8.1.0',
    version_index: '2'
  },
  {
    id: 27,
    label: 'C++ 14 / g++ 14 GCC 7.2.0',
    language: 'C++ 14',
    language_code: 'cpp14',
    version: 'g++ 14 GCC 7.2.0',
    version_index: '1'
  },
  {
    id: 28,
    label: 'C++ 14 / g++ 14 GCC 5.3.0',
    language: 'C++ 14',
    language_code: 'cpp14',
    version: 'g++ 14 GCC 5.3.0',
    version_index: '0'
  },
  {
    id: 29,
    label: 'C++ 17 / g++ 17 GCC 9.1.0',
    language: 'C++ 17',
    language_code: 'cpp17',
    version: 'g++ 17 GCC 9.1.0',
    version_index: '0'
  },
  {
    id: 30,
    label: 'PHP / 8.0.13',
    language: 'PHP',
    language_code: 'php',
    version: '8.0.13',
    version_index: '4'
  },
  {
    id: 31,
    label: 'PHP / 7.3.10',
    language: 'PHP',
    language_code: 'php',
    version: '7.3.10',
    version_index: '3'
  },
  {
    id: 32,
    label: 'PHP / 7.2.5',
    language: 'PHP',
    language_code: 'php',
    version: '7.2.5',
    version_index: '2'
  },
  {
    id: 33,
    label: 'PHP / 7.1.11',
    language: 'PHP',
    language_code: 'php',
    version: '7.1.11',
    version_index: '1'
  },
  {
    id: 34,
    label: 'PHP / 5.6.16',
    language: 'PHP',
    language_code: 'php',
    version: '5.6.16',
    version_index: '0'
  },
  {
    id: 35,
    label: 'Perl / 5.34.0',
    language: 'Perl',
    language_code: 'perl',
    version: '5.34.0',
    version_index: '4'
  },
  {
    id: 36,
    label: 'Perl / 5.30.0',
    language: 'Perl',
    language_code: 'perl',
    version: '5.30.0',
    version_index: '3'
  },
  {
    id: 37,
    label: 'Perl / 5.26.2',
    language: 'Perl',
    language_code: 'perl',
    version: '5.26.2',
    version_index: '2'
  },
  {
    id: 38,
    label: 'Perl / 5.26.1',
    language: 'Perl',
    language_code: 'perl',
    version: '5.26.1',
    version_index: '1'
  },
  {
    id: 39,
    label: 'Perl / 5.22.0',
    language: 'Perl',
    language_code: 'perl',
    version: '5.22.0',
    version_index: '0'
  },
  {
    id: 40,
    label: 'Python 2 / 2.7.18',
    language: 'Python 2',
    language_code: 'python2',
    version: '2.7.18',
    version_index: '3'
  },
  {
    id: 41,
    label: 'Python 2 / 2.7.16',
    language: 'Python 2',
    language_code: 'python2',
    version: '2.7.16',
    version_index: '2'
  },
  {
    id: 42,
    label: 'Python 2 / 2.7.15',
    language: 'Python 2',
    language_code: 'python2',
    version: '2.7.15',
    version_index: '1'
  },
  {
    id: 43,
    label: 'Python 2 / 2.7.11',
    language: 'Python 2',
    language_code: 'python2',
    version: '2.7.11',
    version_index: '0'
  },
  {
    id: 44,
    label: 'Python 3 / 3.7.4',
    language: 'Python 3',
    language_code: 'python3',
    version: '3.7.4',
    version_index: '3'
  },
  {
    id: 45,
    label: 'Python 3 / 3.6.5',
    language: 'Python 3',
    language_code: 'python3',
    version: '3.6.5',
    version_index: '2'
  },
  {
    id: 46,
    label: 'Python 3 / 3.6.3',
    language: 'Python 3',
    language_code: 'python3',
    version: '3.6.3',
    version_index: '1'
  },
  {
    id: 47,
    label: 'Python 3 / 3.5.1',
    language: 'Python 3',
    language_code: 'python3',
    version: '3.5.1',
    version_index: '0'
  },
  {
    id: 48,
    label: 'Ruby / 3.0.2',
    language: 'Ruby',
    language_code: 'ruby',
    version: '3.0.2',
    version_index: '4'
  },
  {
    id: 49,
    label: 'Ruby / 2.6.5',
    language: 'Ruby',
    language_code: 'ruby',
    version: '2.6.5',
    version_index: '3'
  },
  {
    id: 50,
    label: 'Ruby / 2.5.1p57',
    language: 'Ruby',
    language_code: 'ruby',
    version: '2.5.1p57',
    version_index: '2'
  },
  {
    id: 51,
    label: 'Ruby / 2.4.2p198',
    language: 'Ruby',
    language_code: 'ruby',
    version: '2.4.2p198',
    version_index: '1'
  },
  {
    id: 52,
    label: 'Ruby / 2.2.4',
    language: 'Ruby',
    language_code: 'ruby',
    version: '2.2.4',
    version_index: '0'
  },
  {
    id: 53,
    label: 'GO Lang / 1.17.3',
    language: 'GO Lang',
    language_code: 'go',
    version: '1.17.3',
    version_index: '4'
  },
  {
    id: 54,
    label: 'GO Lang / 1.13.1',
    language: 'GO Lang',
    language_code: 'go',
    version: '1.13.1',
    version_index: '3'
  },
  {
    id: 55,
    label: 'GO Lang / 1.10.2',
    language: 'GO Lang',
    language_code: 'go',
    version: '1.10.2',
    version_index: '2'
  },
  {
    id: 56,
    label: 'GO Lang / 1.9.2',
    language: 'GO Lang',
    language_code: 'go',
    version: '1.9.2',
    version_index: '1'
  },
  {
    id: 57,
    label: 'GO Lang / 1.5.2',
    language: 'GO Lang',
    language_code: 'go',
    version: '1.5.2',
    version_index: '0'
  },
  {
    id: 58,
    label: 'Scala / 2.13.6',
    language: 'Scala',
    language_code: 'scala',
    version: '2.13.6',
    version_index: '4'
  },
  {
    id: 59,
    label: 'Scala / 2.13.0',
    language: 'Scala',
    language_code: 'scala',
    version: '2.13.0',
    version_index: '3'
  },
  {
    id: 60,
    label: 'Scala / 2.12.5',
    language: 'Scala',
    language_code: 'scala',
    version: '2.12.5',
    version_index: '2'
  },
  {
    id: 61,
    label: 'Scala / 2.12.4',
    language: 'Scala',
    language_code: 'scala',
    version: '2.12.4',
    version_index: '1'
  },
  {
    id: 62,
    label: 'Scala / 2.12.0',
    language: 'Scala',
    language_code: 'scala',
    version: '2.12.0',
    version_index: '0'
  },
  {
    id: 63,
    label: 'Bash Shell / 5.1.12',
    language: 'Bash Shell',
    language_code: 'bash',
    version: '5.1.12',
    version_index: '4'
  },
  {
    id: 64,
    label: 'Bash Shell / 5.0.011',
    language: 'Bash Shell',
    language_code: 'bash',
    version: '5.0.011',
    version_index: '3'
  },
  {
    id: 65,
    label: 'Bash Shell / 4.4.19',
    language: 'Bash Shell',
    language_code: 'bash',
    version: '4.4.19',
    version_index: '2'
  },
  {
    id: 66,
    label: 'Bash Shell / 4.4.12',
    language: 'Bash Shell',
    language_code: 'bash',
    version: '4.4.12',
    version_index: '1'
  },
  {
    id: 67,
    label: 'Bash Shell / 4.3.42',
    language: 'Bash Shell',
    language_code: 'bash',
    version: '4.3.42',
    version_index: '0'
  },
  {
    id: 68,
    label: 'SQL / 3.37.0',
    language: 'SQL',
    language_code: 'sql',
    version: '3.37.0',
    version_index: '4'
  },
  {
    id: 69,
    label: 'SQL / SQLite 3.29.0',
    language: 'SQL',
    language_code: 'sql',
    version: 'SQLite 3.29.0',
    version_index: '3'
  },
  {
    id: 70,
    label: 'SQL / SQLite 3.23.1',
    language: 'SQL',
    language_code: 'sql',
    version: 'SQLite 3.23.1',
    version_index: '2'
  },
  {
    id: 71,
    label: 'SQL / SQLite 3.21.0',
    language: 'SQL',
    language_code: 'sql',
    version: 'SQLite 3.21.0',
    version_index: '1'
  },
  {
    id: 72,
    label: 'SQL / SQLite 3.9.2',
    language: 'SQL',
    language_code: 'sql',
    version: 'SQLite 3.9.2',
    version_index: '0'
  },
  {
    id: 73,
    label: 'Pascal / fpc-3.2.2',
    language: 'Pascal',
    language_code: 'pascal',
    version: 'fpc-3.2.2',
    version_index: '3'
  },
  {
    id: 74,
    label: 'Pascal / fpc-3.0.4',
    language: 'Pascal',
    language_code: 'pascal',
    version: 'fpc-3.0.4',
    version_index: '2'
  },
  {
    id: 75,
    label: 'Pascal / fpc-3.0.2',
    language: 'Pascal',
    language_code: 'pascal',
    version: 'fpc-3.0.2',
    version_index: '1'
  },
  {
    id: 76,
    label: 'Pascal / fpc 3.0.0',
    language: 'Pascal',
    language_code: 'pascal',
    version: 'fpc 3.0.0',
    version_index: '0'
  },
  {
    id: 77,
    label: 'C# / mono-6.12.0',
    language: 'C#',
    language_code: 'csharp',
    version: 'mono-6.12.0',
    version_index: '4'
  },
  {
    id: 78,
    label: 'C# / mono 6.0.0',
    language: 'C#',
    language_code: 'csharp',
    version: 'mono 6.0.0',
    version_index: '3'
  },
  {
    id: 79,
    label: 'C# / mono 5.10.1',
    language: 'C#',
    language_code: 'csharp',
    version: 'mono 5.10.1',
    version_index: '2'
  },
  {
    id: 80,
    label: 'C# / mono 5.0.0',
    language: 'C#',
    language_code: 'csharp',
    version: 'mono 5.0.0',
    version_index: '1'
  },
  {
    id: 81,
    label: 'C# / mono 4.2.2',
    language: 'C#',
    language_code: 'csharp',
    version: 'mono 4.2.2',
    version_index: '0'
  },
  {
    id: 82,
    label: 'VB.Net / mono 6.12.0',
    language: 'VB.Net',
    language_code: 'vbn',
    version: 'mono 6.12.0',
    version_index: '4'
  },
  {
    id: 83,
    label: 'VB.Net / mono 6.0.0',
    language: 'VB.Net',
    language_code: 'vbn',
    version: 'mono 6.0.0',
    version_index: '3'
  },
  {
    id: 84,
    label: 'VB.Net / mono 5.10.1',
    language: 'VB.Net',
    language_code: 'vbn',
    version: 'mono 5.10.1',
    version_index: '2'
  },
  {
    id: 85,
    label: 'VB.Net / mono 4.6',
    language: 'VB.Net',
    language_code: 'vbn',
    version: 'mono 4.6',
    version_index: '1'
  },
  {
    id: 86,
    label: 'VB.Net / mono 4.0.1',
    language: 'VB.Net',
    language_code: 'vbn',
    version: 'mono 4.0.1',
    version_index: '0'
  },
  {
    id: 87,
    label: 'Haskell / 9.0.1',
    language: 'Haskell',
    language_code: 'haskell',
    version: '9.0.1',
    version_index: '4'
  },
  {
    id: 88,
    label: 'Haskell / ghc 8.6.5',
    language: 'Haskell',
    language_code: 'haskell',
    version: 'ghc 8.6.5',
    version_index: '3'
  },
  {
    id: 89,
    label: 'Haskell / ghc 8.2.2',
    language: 'Haskell',
    language_code: 'haskell',
    version: 'ghc 8.2.2',
    version_index: '2'
  },
  {
    id: 90,
    label: 'Haskell / ghc 8.2.1',
    language: 'Haskell',
    language_code: 'haskell',
    version: 'ghc 8.2.1',
    version_index: '1'
  },
  {
    id: 91,
    label: 'Haskell / ghc 7.10.3',
    language: 'Haskell',
    language_code: 'haskell',
    version: 'ghc 7.10.3',
    version_index: '0'
  },
  {
    id: 92,
    label: 'Objective C / GCC 11.1.0',
    language: 'Objective C',
    language_code: 'objc',
    version: 'GCC 11.1.0',
    version_index: '4'
  },
  {
    id: 93,
    label: 'Objective C / GCC 9.1.0',
    language: 'Objective C',
    language_code: 'objc',
    version: 'GCC 9.1.0',
    version_index: '3'
  },
  {
    id: 94,
    label: 'Objective C / GCC 8.1.0',
    language: 'Objective C',
    language_code: 'objc',
    version: 'GCC 8.1.0',
    version_index: '2'
  },
  {
    id: 95,
    label: 'Objective C / GCC 7.2.0',
    language: 'Objective C',
    language_code: 'objc',
    version: 'GCC 7.2.0',
    version_index: '1'
  },
  {
    id: 96,
    label: 'Objective C / GCC 5.3.0',
    language: 'Objective C',
    language_code: 'objc',
    version: 'GCC 5.3.0',
    version_index: '0'
  },
  {
    id: 97,
    label: 'Swift / 5.5',
    language: 'Swift',
    language_code: 'swift',
    version: '5.5',
    version_index: '4'
  },
  {
    id: 98,
    label: 'Swift / 5.1',
    language: 'Swift',
    language_code: 'swift',
    version: '5.1',
    version_index: '3'
  },
  {
    id: 99,
    label: 'Swift / 4.1',
    language: 'Swift',
    language_code: 'swift',
    version: '4.1',
    version_index: '2'
  },
  {
    id: 100,
    label: 'Swift / 3.1.1',
    language: 'Swift',
    language_code: 'swift',
    version: '3.1.1',
    version_index: '1'
  },
  {
    id: 101,
    label: 'Swift / 2.2',
    language: 'Swift',
    language_code: 'swift',
    version: '2.2',
    version_index: '0'
  },
  {
    id: 102,
    label: 'Groovy / 3.0.9 JVM: 17.0.1',
    language: 'Groovy',
    language_code: 'groovy',
    version: '3.0.9 JVM: 17.0.1',
    version_index: '4'
  },
  {
    id: 103,
    label: 'Groovy / 2.5.8 JVM: 11.0.4',
    language: 'Groovy',
    language_code: 'groovy',
    version: '2.5.8 JVM: 11.0.4',
    version_index: '3'
  },
  {
    id: 104,
    label: 'Groovy / 2.4.15 JVM: 10.0.1',
    language: 'Groovy',
    language_code: 'groovy',
    version: '2.4.15 JVM: 10.0.1',
    version_index: '2'
  },
  {
    id: 105,
    label: 'Groovy / 2.4.12 JVM: 9.0.1',
    language: 'Groovy',
    language_code: 'groovy',
    version: '2.4.12 JVM: 9.0.1',
    version_index: '1'
  },
  {
    id: 106,
    label: 'Groovy / 2.4.6 JVM: 1.7.0_99',
    language: 'Groovy',
    language_code: 'groovy',
    version: '2.4.6 JVM: 1.7.0_99',
    version_index: '0'
  },
  {
    id: 107,
    label: 'Fortran / GNU 11.1.0',
    language: 'Fortran',
    language_code: 'fortran',
    version: 'GNU 11.1.0',
    version_index: '4'
  },
  {
    id: 108,
    label: 'Fortran / GNU 9.1.0',
    language: 'Fortran',
    language_code: 'fortran',
    version: 'GNU 9.1.0',
    version_index: '3'
  },
  {
    id: 109,
    label: 'Fortran / GNU 8.1.0',
    language: 'Fortran',
    language_code: 'fortran',
    version: 'GNU 8.1.0',
    version_index: '2'
  },
  {
    id: 110,
    label: 'Fortran / GNU 7.2.0',
    language: 'Fortran',
    language_code: 'fortran',
    version: 'GNU 7.2.0',
    version_index: '1'
  },
  {
    id: 111,
    label: 'Fortran / GNU 5.3.0',
    language: 'Fortran',
    language_code: 'fortran',
    version: 'GNU 5.3.0',
    version_index: '0'
  },
  {
    id: 112,
    label: 'Brainf**k / bfc-0.1',
    language: 'Brainf**k',
    language_code: 'brainfuck',
    version: 'bfc-0.1',
    version_index: '0'
  },
  {
    id: 113,
    label: 'Lua / 5.4.3',
    language: 'Lua',
    language_code: 'lua',
    version: '5.4.3',
    version_index: '3'
  },
  {
    id: 114,
    label: 'Lua / 5.3.5',
    language: 'Lua',
    language_code: 'lua',
    version: '5.3.5',
    version_index: '2'
  },
  {
    id: 115,
    label: 'Lua / 5.3.4',
    language: 'Lua',
    language_code: 'lua',
    version: '5.3.4',
    version_index: '1'
  },
  {
    id: 116,
    label: 'Lua / 5.3.2',
    language: 'Lua',
    language_code: 'lua',
    version: '5.3.2',
    version_index: '0'
  },
  {
    id: 117,
    label: 'TCL / 8.6.12',
    language: 'TCL',
    language_code: 'tcl',
    version: '8.6.12',
    version_index: '4'
  },
  {
    id: 118,
    label: 'TCL / 8.6.9',
    language: 'TCL',
    language_code: 'tcl',
    version: '8.6.9',
    version_index: '3'
  },
  {
    id: 119,
    label: 'TCL / 8.6.8',
    language: 'TCL',
    language_code: 'tcl',
    version: '8.6.8',
    version_index: '2'
  },
  {
    id: 120,
    label: 'TCL / 8.6.7',
    language: 'TCL',
    language_code: 'tcl',
    version: '8.6.7',
    version_index: '1'
  },
  {
    id: 121,
    label: 'TCL / 8.6',
    language: 'TCL',
    language_code: 'tcl',
    version: '8.6',
    version_index: '0'
  },
  {
    id: 122,
    label: 'Hack / HipHop VM 3.13.0',
    language: 'Hack',
    language_code: 'hack',
    version: 'HipHop VM 3.13.0',
    version_index: '0'
  },
  {
    id: 123,
    label: 'RUST / 1.56.1',
    language: 'RUST',
    language_code: 'rust',
    version: '1.56.1',
    version_index: '4'
  },
  {
    id: 124,
    label: 'RUST / 1.38.0',
    language: 'RUST',
    language_code: 'rust',
    version: '1.38.0',
    version_index: '3'
  },
  {
    id: 125,
    label: 'RUST / 1.25.0',
    language: 'RUST',
    language_code: 'rust',
    version: '1.25.0',
    version_index: '2'
  },
  {
    id: 126,
    label: 'RUST / 1.21.0',
    language: 'RUST',
    language_code: 'rust',
    version: '1.21.0',
    version_index: '1'
  },
  {
    id: 127,
    label: 'RUST / 1.10.0',
    language: 'RUST',
    language_code: 'rust',
    version: '1.10.0',
    version_index: '0'
  },
  {
    id: 128,
    label: 'D / DMD64 D Compiler v2.098',
    language: 'D',
    language_code: 'd',
    version: 'DMD64 D Compiler v2.098',
    version_index: '2'
  },
  {
    id: 129,
    label: 'D / DMD64 D Compiler v2.088',
    language: 'D',
    language_code: 'd',
    version: 'DMD64 D Compiler v2.088',
    version_index: '1'
  },
  {
    id: 130,
    label: 'D / DMD64 D Compiler v2.071.1',
    language: 'D',
    language_code: 'd',
    version: 'DMD64 D Compiler v2.071.1',
    version_index: '0'
  },
  {
    id: 131,
    label: 'Ada / GNATMAKE 11.1.0',
    language: 'Ada',
    language_code: 'ada',
    version: 'GNATMAKE 11.1.0',
    version_index: '4'
  },
  {
    id: 132,
    label: 'Ada / GNATMAKE 9.1.0',
    language: 'Ada',
    language_code: 'ada',
    version: 'GNATMAKE 9.1.0',
    version_index: '3'
  },
  {
    id: 133,
    label: 'Ada / GNATMAKE 8.1.0',
    language: 'Ada',
    language_code: 'ada',
    version: 'GNATMAKE 8.1.0',
    version_index: '2'
  },
  {
    id: 134,
    label: 'Ada / GNATMAKE 7.2.0',
    language: 'Ada',
    language_code: 'ada',
    version: 'GNATMAKE 7.2.0',
    version_index: '1'
  },
  {
    id: 135,
    label: 'Ada / GNATMAKE 6.1.1',
    language: 'Ada',
    language_code: 'ada',
    version: 'GNATMAKE 6.1.1',
    version_index: '0'
  },
  {
    id: 136,
    label: 'R Language / 4.1.2',
    language: 'R Language',
    language_code: 'r',
    version: '4.1.2',
    version_index: '4'
  },
  {
    id: 137,
    label: 'R Language / 3.6.1',
    language: 'R Language',
    language_code: 'r',
    version: '3.6.1',
    version_index: '3'
  },
  {
    id: 138,
    label: 'R Language / 3.5.0',
    language: 'R Language',
    language_code: 'r',
    version: '3.5.0',
    version_index: '2'
  },
  {
    id: 139,
    label: 'R Language / 3.4.2',
    language: 'R Language',
    language_code: 'r',
    version: '3.4.2',
    version_index: '1'
  },
  {
    id: 140,
    label: 'R Language / 3.3.1',
    language: 'R Language',
    language_code: 'r',
    version: '3.3.1',
    version_index: '0'
  },
  {
    id: 141,
    label: 'FREE BASIC / 1.08.1',
    language: 'FREE BASIC',
    language_code: 'freebasic',
    version: '1.08.1',
    version_index: '2'
  },
  {
    id: 142,
    label: 'FREE BASIC / 1.07.1',
    language: 'FREE BASIC',
    language_code: 'freebasic',
    version: '1.07.1',
    version_index: '1'
  },
  {
    id: 143,
    label: 'FREE BASIC / 1.05.0',
    language: 'FREE BASIC',
    language_code: 'freebasic',
    version: '1.05.0',
    version_index: '0'
  },
  {
    id: 144,
    label: 'VERILOG / 11',
    language: 'VERILOG',
    language_code: 'verilog',
    version: '11',
    version_index: '3'
  },
  {
    id: 145,
    label: 'VERILOG / 10.3',
    language: 'VERILOG',
    language_code: 'verilog',
    version: '10.3',
    version_index: '2'
  },
  {
    id: 146,
    label: 'VERILOG / 10.2',
    language: 'VERILOG',
    language_code: 'verilog',
    version: '10.2',
    version_index: '1'
  },
  {
    id: 147,
    label: 'VERILOG / 10.1',
    language: 'VERILOG',
    language_code: 'verilog',
    version: '10.1',
    version_index: '0'
  },
  {
    id: 148,
    label: 'COBOL / GNU COBOL 3.1.2',
    language: 'COBOL',
    language_code: 'cobol',
    version: 'GNU COBOL 3.1.2',
    version_index: '3'
  },
  {
    id: 149,
    label: 'COBOL / GNU COBOL 3.0',
    language: 'COBOL',
    language_code: 'cobol',
    version: 'GNU COBOL 3.0',
    version_index: '2'
  },
  {
    id: 150,
    label: 'COBOL / GNU COBOL 2.2.0',
    language: 'COBOL',
    language_code: 'cobol',
    version: 'GNU COBOL 2.2.0',
    version_index: '1'
  },
  {
    id: 151,
    label: 'COBOL / GNU COBOL 2.0.0',
    language: 'COBOL',
    language_code: 'cobol',
    version: 'GNU COBOL 2.0.0',
    version_index: '0'
  },
  {
    id: 152,
    label: 'Dart / 2.14.4',
    language: 'Dart',
    language_code: 'dart',
    version: '2.14.4',
    version_index: '4'
  },
  {
    id: 153,
    label: 'Dart / 2.5.1',
    language: 'Dart',
    language_code: 'dart',
    version: '2.5.1',
    version_index: '3'
  },
  {
    id: 154,
    label: 'Dart / 1.24.3',
    language: 'Dart',
    language_code: 'dart',
    version: '1.24.3',
    version_index: '2'
  },
  {
    id: 155,
    label: 'Dart / 1.24.2',
    language: 'Dart',
    language_code: 'dart',
    version: '1.24.2',
    version_index: '1'
  },
  {
    id: 156,
    label: 'Dart / 1.18.0',
    language: 'Dart',
    language_code: 'dart',
    version: '1.18.0',
    version_index: '0'
  },
  {
    id: 157,
    label: 'YaBasic / 2.84.1',
    language: 'YaBasic',
    language_code: 'yabasic',
    version: '2.84.1',
    version_index: '1'
  },
  {
    id: 158,
    label: 'YaBasic / 2.769',
    language: 'YaBasic',
    language_code: 'yabasic',
    version: '2.769',
    version_index: '0'
  },
  {
    id: 159,
    label: 'Clojure / 1.10.3',
    language: 'Clojure',
    language_code: 'clojure',
    version: '1.10.3',
    version_index: '3'
  },
  {
    id: 160,
    label: 'Clojure / 1.10.1',
    language: 'Clojure',
    language_code: 'clojure',
    version: '1.10.1',
    version_index: '2'
  },
  {
    id: 161,
    label: 'Clojure / 1.9.0',
    language: 'Clojure',
    language_code: 'clojure',
    version: '1.9.0',
    version_index: '1'
  },
  {
    id: 162,
    label: 'Clojure / 1.8.0',
    language: 'Clojure',
    language_code: 'clojure',
    version: '1.8.0',
    version_index: '0'
  },
  {
    id: 163,
    label: 'NodeJS / 17.1.0',
    language: 'NodeJS',
    language_code: 'nodejs',
    version: '17.1.0',
    version_index: '4'
  },
  {
    id: 164,
    label: 'NodeJS / 12.11.1',
    language: 'NodeJS',
    language_code: 'nodejs',
    version: '12.11.1',
    version_index: '3'
  },
  {
    id: 165,
    label: 'NodeJS / 10.1.0',
    language: 'NodeJS',
    language_code: 'nodejs',
    version: '10.1.0',
    version_index: '2'
  },
  {
    id: 166,
    label: 'NodeJS / 9.2.0',
    language: 'NodeJS',
    language_code: 'nodejs',
    version: '9.2.0',
    version_index: '1'
  },
  {
    id: 167,
    label: 'NodeJS / 6.3.1',
    language: 'NodeJS',
    language_code: 'nodejs',
    version: '6.3.1',
    version_index: '0'
  },
  {
    id: 168,
    label: 'Scheme / Gauche 0.9.10',
    language: 'Scheme',
    language_code: 'scheme',
    version: 'Gauche 0.9.10',
    version_index: '3'
  },
  {
    id: 169,
    label: 'Scheme / Gauche 0.9.8',
    language: 'Scheme',
    language_code: 'scheme',
    version: 'Gauche 0.9.8',
    version_index: '2'
  },
  {
    id: 170,
    label: 'Scheme / Gauche 0.9.5',
    language: 'Scheme',
    language_code: 'scheme',
    version: 'Gauche 0.9.5',
    version_index: '1'
  },
  {
    id: 171,
    label: 'Scheme / Gauche 0.9.4',
    language: 'Scheme',
    language_code: 'scheme',
    version: 'Gauche 0.9.4',
    version_index: '0'
  },
  {
    id: 172,
    label: 'Forth / gforth 0.7.3',
    language: 'Forth',
    language_code: 'forth',
    version: 'gforth 0.7.3',
    version_index: '0'
  },
  {
    id: 173,
    label: 'Prolog / GNU Prolog 1.5.0',
    language: 'Prolog',
    language_code: 'prolog',
    version: 'GNU Prolog 1.5.0',
    version_index: '2'
  },
  {
    id: 174,
    label: 'Prolog / GNU Prolog 1.4.5',
    language: 'Prolog',
    language_code: 'prolog',
    version: 'GNU Prolog 1.4.5',
    version_index: '1'
  },
  {
    id: 175,
    label: 'Prolog / GNU Prolog 1.4.4',
    language: 'Prolog',
    language_code: 'prolog',
    version: 'GNU Prolog 1.4.4',
    version_index: '0'
  },
  {
    id: 176,
    label: 'Octave / GNU 6.4.0',
    language: 'Octave',
    language_code: 'octave',
    version: 'GNU 6.4.0',
    version_index: '4'
  },
  {
    id: 177,
    label: 'Octave / GNU 5.1.0',
    language: 'Octave',
    language_code: 'octave',
    version: 'GNU 5.1.0',
    version_index: '3'
  },
  {
    id: 178,
    label: 'Octave / GNU 4.4.0',
    language: 'Octave',
    language_code: 'octave',
    version: 'GNU 4.4.0',
    version_index: '2'
  },
  {
    id: 179,
    label: 'Octave / GNU 4.2.1',
    language: 'Octave',
    language_code: 'octave',
    version: 'GNU 4.2.1',
    version_index: '1'
  },
  {
    id: 180,
    label: 'Octave / GNU 4.0.0',
    language: 'Octave',
    language_code: 'octave',
    version: 'GNU 4.0.0',
    version_index: '0'
  },
  {
    id: 181,
    label: 'CoffeeScript / 2.6.1',
    language: 'CoffeeScript',
    language_code: 'coffeescript',
    version: '2.6.1',
    version_index: '4'
  },
  {
    id: 182,
    label: 'CoffeeScript / 2.4.1',
    language: 'CoffeeScript',
    language_code: 'coffeescript',
    version: '2.4.1',
    version_index: '3'
  },
  {
    id: 183,
    label: 'CoffeeScript / 2.3.0',
    language: 'CoffeeScript',
    language_code: 'coffeescript',
    version: '2.3.0',
    version_index: '2'
  },
  {
    id: 184,
    label: 'CoffeeScript / 2.0.0',
    language: 'CoffeeScript',
    language_code: 'coffeescript',
    version: '2.0.0',
    version_index: '1'
  },
  {
    id: 185,
    label: 'CoffeeScript / 1.11.1',
    language: 'CoffeeScript',
    language_code: 'coffeescript',
    version: '1.11.1',
    version_index: '0'
  },
  {
    id: 186,
    label: 'Icon / 9.5.1',
    language: 'Icon',
    language_code: 'icon',
    version: '9.5.1',
    version_index: '1'
  },
  {
    id: 187,
    label: 'Icon / 9.4.3',
    language: 'Icon',
    language_code: 'icon',
    version: '9.4.3',
    version_index: '0'
  },
  {
    id: 188,
    label: 'F# / 4.5.0',
    language: 'F#',
    language_code: 'fsharp',
    version: '4.5.0',
    version_index: '1'
  },
  {
    id: 189,
    label: 'F# / 4.1',
    language: 'F#',
    language_code: 'fsharp',
    version: '4.1',
    version_index: '0'
  },
  {
    id: 190,
    label: 'Assembler - NASM / 2.15.05',
    language: 'Assembler - NASM',
    language_code: 'nasm',
    version: '2.15.05',
    version_index: '4'
  },
  {
    id: 191,
    label: 'Assembler - NASM / 2.14.02',
    language: 'Assembler - NASM',
    language_code: 'nasm',
    version: '2.14.02',
    version_index: '3'
  },
  {
    id: 192,
    label: 'Assembler - NASM / 2.13.03',
    language: 'Assembler - NASM',
    language_code: 'nasm',
    version: '2.13.03',
    version_index: '2'
  },
  {
    id: 193,
    label: 'Assembler - NASM / 2.13.01',
    language: 'Assembler - NASM',
    language_code: 'nasm',
    version: '2.13.01',
    version_index: '1'
  },
  {
    id: 194,
    label: 'Assembler - NASM / 2.11.08',
    language: 'Assembler - NASM',
    language_code: 'nasm',
    version: '2.11.08',
    version_index: '0'
  },
  {
    id: 195,
    label: 'Assembler - GCC / GCC 11.1.0',
    language: 'Assembler - GCC',
    language_code: 'gccasm',
    version: 'GCC 11.1.0',
    version_index: '3'
  },
  {
    id: 196,
    label: 'Assembler - GCC / GCC 9.1.0',
    language: 'Assembler - GCC',
    language_code: 'gccasm',
    version: 'GCC 9.1.0',
    version_index: '2'
  },
  {
    id: 197,
    label: 'Assembler - GCC / GCC 8.1.0',
    language: 'Assembler - GCC',
    language_code: 'gccasm',
    version: 'GCC 8.1.0',
    version_index: '1'
  },
  {
    id: 198,
    label: 'Assembler - GCC / GCC 6.2.1',
    language: 'Assembler - GCC',
    language_code: 'gccasm',
    version: 'GCC 6.2.1',
    version_index: '0'
  },
  {
    id: 199,
    label: 'Intercal / 0.30',
    language: 'Intercal',
    language_code: 'intercal',
    version: '0.30',
    version_index: '0'
  },
  {
    id: 200,
    label: 'Nemerle / 1.2.0.507',
    language: 'Nemerle',
    language_code: 'nemerle',
    version: '1.2.0.507',
    version_index: '0'
  },
  {
    id: 201,
    label: 'Ocaml / 4.12.0',
    language: 'Ocaml',
    language_code: 'ocaml',
    version: '4.12.0',
    version_index: '2'
  },
  {
    id: 202,
    label: 'Ocaml / 4.08.1',
    language: 'Ocaml',
    language_code: 'ocaml',
    version: '4.08.1',
    version_index: '1'
  },
  {
    id: 203,
    label: 'Ocaml / 4.03.0',
    language: 'Ocaml',
    language_code: 'ocaml',
    version: '4.03.0',
    version_index: '0'
  },
  {
    id: 204,
    label: 'Unlambda / 0.1.4.2',
    language: 'Unlambda',
    language_code: 'unlambda',
    version: '0.1.4.2',
    version_index: '1'
  },
  {
    id: 205,
    label: 'Unlambda / 0.1.3',
    language: 'Unlambda',
    language_code: 'unlambda',
    version: '0.1.3',
    version_index: '0'
  },
  {
    id: 206,
    label: 'Picolisp / 21.6.30',
    language: 'Picolisp',
    language_code: 'picolisp',
    version: '21.6.30',
    version_index: '4'
  },
  {
    id: 207,
    label: 'Picolisp / 18.9.5',
    language: 'Picolisp',
    language_code: 'picolisp',
    version: '18.9.5',
    version_index: '3'
  },
  {
    id: 208,
    label: 'Picolisp / 18.5.11',
    language: 'Picolisp',
    language_code: 'picolisp',
    version: '18.5.11',
    version_index: '2'
  },
  {
    id: 209,
    label: 'Picolisp / 17.11.14',
    language: 'Picolisp',
    language_code: 'picolisp',
    version: '17.11.14',
    version_index: '1'
  },
  {
    id: 210,
    label: 'Picolisp / 3.1.11.1',
    language: 'Picolisp',
    language_code: 'picolisp',
    version: '3.1.11.1',
    version_index: '0'
  },
  {
    id: 211,
    label: 'SpiderMonkey / 45.0.2',
    language: 'SpiderMonkey',
    language_code: 'spidermonkey',
    version: '45.0.2',
    version_index: '1'
  },
  {
    id: 212,
    label: 'SpiderMonkey / 38',
    language: 'SpiderMonkey',
    language_code: 'spidermonkey',
    version: '38',
    version_index: '0'
  },
  {
    id: 213,
    label: 'Rhino JS / 1.7.13',
    language: 'Rhino JS',
    language_code: 'rhino',
    version: '1.7.13',
    version_index: '2'
  },
  {
    id: 214,
    label: 'Rhino JS / 1.7.7.2',
    language: 'Rhino JS',
    language_code: 'rhino',
    version: '1.7.7.2',
    version_index: '1'
  },
  {
    id: 215,
    label: 'Rhino JS / 1.7.7.1',
    language: 'Rhino JS',
    language_code: 'rhino',
    version: '1.7.7.1',
    version_index: '0'
  },
  {
    id: 216,
    label: 'BC / 1.07.1',
    language: 'BC',
    language_code: 'bc',
    version: '1.07.1',
    version_index: '1'
  },
  {
    id: 217,
    label: 'BC / 1.06.95',
    language: 'BC',
    language_code: 'bc',
    version: '1.06.95',
    version_index: '0'
  },
  {
    id: 218,
    label: 'CLISP / abcl 1.8.0',
    language: 'CLISP',
    language_code: 'clisp',
    version: 'abcl 1.8.0',
    version_index: '7'
  },
  {
    id: 219,
    label: 'CLISP / ccl 1.12.1',
    language: 'CLISP',
    language_code: 'clisp',
    version: 'ccl 1.12.1',
    version_index: '6'
  },
  {
    id: 220,
    label: 'CLISP / sbcl 2.1.9',
    language: 'CLISP',
    language_code: 'clisp',
    version: 'sbcl 2.1.9',
    version_index: '5'
  },
  {
    id: 221,
    label: 'CLISP / ecl 21.2.1',
    language: 'CLISP',
    language_code: 'clisp',
    version: 'ecl 21.2.1',
    version_index: '4'
  },
  {
    id: 222,
    label: 'CLISP / GNU CLISP 2.49.93 - GNU 9.1.0',
    language: 'CLISP',
    language_code: 'clisp',
    version: 'GNU CLISP 2.49.93 - GNU 9.1.0',
    version_index: '3'
  },
  {
    id: 223,
    label: 'CLISP / GNU CLISP 2.49.93 - GNU 8.1.0',
    language: 'CLISP',
    language_code: 'clisp',
    version: 'GNU CLISP 2.49.93 - GNU 8.1.0',
    version_index: '2'
  },
  {
    id: 224,
    label: 'CLISP / GNU CLISP 2.49 - GNU C 6.2.1',
    language: 'CLISP',
    language_code: 'clisp',
    version: 'GNU CLISP 2.49 - GNU C 6.2.1',
    version_index: '1'
  },
  {
    id: 225,
    label: 'CLISP / GNU CLISP 2.49 - GNU C 5.2.0',
    language: 'CLISP',
    language_code: 'clisp',
    version: 'GNU CLISP 2.49 - GNU C 5.2.0',
    version_index: '0'
  },
  {
    id: 226,
    label: 'Elixir / 1.12.2',
    language: 'Elixir',
    language_code: 'elixir',
    version: '1.12.2',
    version_index: '4'
  },
  {
    id: 227,
    label: 'Elixir / 1.9.1',
    language: 'Elixir',
    language_code: 'elixir',
    version: '1.9.1',
    version_index: '3'
  },
  {
    id: 228,
    label: 'Elixir / 1.6.4',
    language: 'Elixir',
    language_code: 'elixir',
    version: '1.6.4',
    version_index: '2'
  },
  {
    id: 229,
    label: 'Elixir / 1.5.2',
    language: 'Elixir',
    language_code: 'elixir',
    version: '1.5.2',
    version_index: '1'
  },
  {
    id: 230,
    label: 'Elixir / 1.3.4',
    language: 'Elixir',
    language_code: 'elixir',
    version: '1.3.4',
    version_index: '0'
  },
  {
    id: 231,
    label: 'Factor / 8.31',
    language: 'Factor',
    language_code: 'factor',
    version: '8.31',
    version_index: '3'
  },
  {
    id: 232,
    label: 'Factor / 8.29',
    language: 'Factor',
    language_code: 'factor',
    version: '8.29',
    version_index: '2'
  },
  {
    id: 233,
    label: 'Factor / 8.28',
    language: 'Factor',
    language_code: 'factor',
    version: '8.28',
    version_index: '1'
  },
  {
    id: 234,
    label: 'Factor / 8.25',
    language: 'Factor',
    language_code: 'factor',
    version: '8.25',
    version_index: '0'
  },
  {
    id: 235,
    label: 'Falcon / 0.9.6.8 (Chimera)',
    language: 'Falcon',
    language_code: 'falcon',
    version: '0.9.6.8 (Chimera)',
    version_index: '0'
  },
  {
    id: 236,
    label: 'Fantom / 1.0.69',
    language: 'Fantom',
    language_code: 'fantom',
    version: '1.0.69',
    version_index: '0'
  },
  {
    id: 237,
    label: 'Nim / 1.4.8',
    language: 'Nim',
    language_code: 'nim',
    version: '1.4.8',
    version_index: '3'
  },
  {
    id: 238,
    label: 'Nim / 0.18.0',
    language: 'Nim',
    language_code: 'nim',
    version: '0.18.0',
    version_index: '2'
  },
  {
    id: 239,
    label: 'Nim / 0.17.2',
    language: 'Nim',
    language_code: 'nim',
    version: '0.17.2',
    version_index: '1'
  },
  {
    id: 240,
    label: 'Nim / 0.15.0',
    language: 'Nim',
    language_code: 'nim',
    version: '0.15.0',
    version_index: '0'
  },
  {
    id: 241,
    label: 'Pike / v8.0.702',
    language: 'Pike',
    language_code: 'pike',
    version: 'v8.0.702',
    version_index: '1'
  },
  {
    id: 242,
    label: 'Pike / v8.0',
    language: 'Pike',
    language_code: 'pike',
    version: 'v8.0',
    version_index: '0'
  },
  {
    id: 243,
    label: 'SmallTalk / GNU SmallTalk 3.2.92',
    language: 'SmallTalk',
    language_code: 'smalltalk',
    version: 'GNU SmallTalk 3.2.92',
    version_index: '0'
  },
  {
    id: 244,
    label: 'OZ Mozart / 2.0.0 (OZ 3)',
    language: 'OZ Mozart',
    language_code: 'mozart',
    version: '2.0.0 (OZ 3)',
    version_index: '0'
  },
  {
    id: 245,
    label: 'LOLCODE / 0.10.5',
    language: 'LOLCODE',
    language_code: 'lolcode',
    version: '0.10.5',
    version_index: '0'
  },
  {
    id: 246,
    label: 'Racket / 8.3',
    language: 'Racket',
    language_code: 'racket',
    version: '8.3',
    version_index: '3'
  },
  {
    id: 247,
    label: 'Racket / 7.4',
    language: 'Racket',
    language_code: 'racket',
    version: '7.4',
    version_index: '2'
  },
  {
    id: 248,
    label: 'Racket / 6.12',
    language: 'Racket',
    language_code: 'racket',
    version: '6.12',
    version_index: '1'
  },
  {
    id: 249,
    label: 'Racket / 6.11',
    language: 'Racket',
    language_code: 'racket',
    version: '6.11',
    version_index: '0'
  },
  {
    id: 250,
    label: 'Kotlin / 1.6.0 (JRE 17.0.1+12)',
    language: 'Kotlin',
    language_code: 'kotlin',
    version: '1.6.0 (JRE 17.0.1+12)',
    version_index: '3'
  },
  {
    id: 251,
    label: 'Kotlin / 1.3.50 (JRE 11.0.4)',
    language: 'Kotlin',
    language_code: 'kotlin',
    version: '1.3.50 (JRE 11.0.4)',
    version_index: '2'
  },
  {
    id: 252,
    label: 'Kotlin / 1.2.40 (JRE 10.0.1)',
    language: 'Kotlin',
    language_code: 'kotlin',
    version: '1.2.40 (JRE 10.0.1)',
    version_index: '1'
  },
  {
    id: 253,
    label: 'Kotlin / 1.1.51 (JRE 9.0.1+11)',
    language: 'Kotlin',
    language_code: 'kotlin',
    version: '1.1.51 (JRE 9.0.1+11)',
    version_index: '0'
  },
  {
    id: 254,
    label: 'Whitespace / 0.3',
    language: 'Whitespace',
    language_code: 'whitespace',
    version: '0.3',
    version_index: '0'
  },
  {
    id: 255,
    label: 'Erlang / 24',
    language: 'Erlang',
    language_code: 'erlang',
    version: '24',
    version_index: '1'
  },
  {
    id: 256,
    label: 'Erlang / 22.1',
    language: 'Erlang',
    language_code: 'erlang',
    version: '22.1',
    version_index: '0'
  },
  {
    id: 257,
    label: 'J Language / 9.01.10',
    language: 'J Language',
    language_code: 'jlang',
    version: '9.01.10',
    version_index: '0'
  },
  {
    id: 258,
    label: 'Haxe / 4.2.4',
    language: 'Haxe',
    language_code: 'haxe',
    version: '4.2.4',
    version_index: '0'
  },
  {
    id: 259,
    label: 'FASM / 1.73.27',
    language: 'FASM',
    language_code: 'fasm',
    version: '1.73.27',
    version_index: '0'
  },
  {
    id: 260,
    label: 'AWK / NU Awk 5.1.1, API: 3.1',
    language: 'AWK',
    language_code: 'awk',
    version: 'NU Awk 5.1.1, API: 3.1',
    version_index: '0'
  },
  {
    id: 261,
    label: 'Algol 68 / Genie 2.8.5',
    language: 'Algol 68',
    language_code: 'algol',
    version: 'Genie 2.8.5',
    version_index: '0'
  },
  {
    id: 262,
    label: 'Befunge / cfunge 0.9.0',
    language: 'Befunge',
    language_code: 'befunge',
    version: 'cfunge 0.9.0',
    version_index: '0'
  },
  {
    id: 263,
    label: 'Blockly / Python 3',
    language: 'Blockly',
    language_code: 'blockly',
    version: 'Python 3',
    version_index: '3'
  },
  {
    id: 264,
    label: 'Blockly / PHP',
    language: 'Blockly',
    language_code: 'blockly',
    version: 'PHP',
    version_index: '2'
  },
  {
    id: 265,
    label: 'Blockly / Lua',
    language: 'Blockly',
    language_code: 'blockly',
    version: 'Lua',
    version_index: '1'
  },
  {
    id: 266,
    label: 'Blockly / Dart',
    language: 'Blockly',
    language_code: 'blockly',
    version: 'Dart',
    version_index: '0'
  }
]

export function editor_mode(l: Language): String{
	if (l.language_code.startsWith("python")) return "python"
	if (l.language_code.startsWith("cpp")) return "cpp"
	return "text"
}

export default languages
