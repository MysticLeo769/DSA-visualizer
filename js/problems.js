const problems = [
  {
    id: 1,
    title: "Sum of Array",
    difficulty: "Easy",
    statement:
      "Given n numbers, print their sum.\n\n" +
      "Input:\nLine 1: n\nLine 2: n integers separated by spaces\n\n" +
      "Output:\nThe sum of the numbers.",
    starter:
      "n = int(input())\n" +
      "nums = list(map(int, input().split()))\n" +
      "# write your code below\n",
    tests: [
      { input: "3\n1 2 3", expected: "6" },
      { input: "1\n5", expected: "5" },
      { input: "4\n-1 -2 3 10", expected: "10" },
      { input: "5\n10 20 30 40 50", expected: "150" }
    ]
  },
  {
    id: 2,
    title: "Binary Search",
    difficulty: "Easy",
    statement:
      "Given a sorted array and a target, print the 0-based index of the target. " +
      "Print -1 if it is not present.\n\n" +
      "Input:\nLine 1: n\nLine 2: n sorted integers\nLine 3: target\n\n" +
      "Output:\nThe index, or -1.",
    starter:
      "n = int(input())\n" +
      "arr = list(map(int, input().split()))\n" +
      "target = int(input())\n" +
      "# write your code below\n",
    tests: [
      { input: "5\n1 3 5 7 9\n7", expected: "3" },
      { input: "5\n1 3 5 7 9\n4", expected: "-1" },
      { input: "1\n2\n2", expected: "0" },
      { input: "6\n2 4 6 8 10 12\n12", expected: "5" }
    ]
  },
  {
    id: 3,
    title: "Balanced Brackets",
    difficulty: "Medium",
    statement:
      "Given a string made only of ( ) [ ] { }, print YES if the brackets are " +
      "balanced and properly nested, otherwise print NO. Hint: use a stack.\n\n" +
      "Input:\nA single line with the string.\n\n" +
      "Output:\nYES or NO.",
    starter:
      "s = input().strip()\n" +
      "# write your code below\n",
    tests: [
      { input: "()[]{}", expected: "YES" },
      { input: "(]", expected: "NO" },
      { input: "{[()]}", expected: "YES" },
      { input: "((", expected: "NO" },
      { input: "([)]", expected: "NO" }
    ]
  }
];
