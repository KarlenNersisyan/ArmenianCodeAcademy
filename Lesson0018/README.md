# Recursion

## Write a recursive function

* to find the sum of a given array.
* to find the factorial of a given natural *N*.

## Write a fib(int) function which returns n-th fibonacci number.

* try to understand the complexity of the recursion and write it down. In the end you will get the golden
ratio.
* try to optimize the recursion with caching results

## Add brackets between letters.

Given a string containing only English letters (uppercase and lowercase). Add opening and closing parentheses
according to the following pattern:*"example" -> "(e (x (a (m) p) l) e)"* (Added opening parentheses to the
middle, closing parentheses after the middle. In case the string length is even there must be 2 characters in the
brackets in the middle. *("card -> (c (ar) d" but not "(c (a () r) d)")*. Example`

```
let s = "LItBeoFLcSGBOFQxMHoIuDDWcqcVgkcRoAeocXO";
addBrackets(s); //
"L(I(t(B(e(o(F(L(c(S(G(B(O(F(Q(x(M(H(o(I)u)D)D)W)c)q)c)V)g)k)c)R)o)A)e)o)c
)X)O"
```
## Print sums of all subsets of a given set

* Given an *array of integers*, print sums of all subsets in it. Output sums can be printed in any order.

*Hint: There are total *2^n* subsets. For every element, we consider two choices.*

```
Input : arr[] = {2, 3}
Output: 0 2 3 5
Input : arr[] = {2, 4, 5}
Output : 0 2 4 5 6 7 9 11
```

## Print all combinations off actors (Ways to factorize)

* Write a program to print all the combinations of factors of given number n.

```
Input : 16
Output: 2 2 2 2
2 2 4
2 8
4 4

Input : 12
Output: 2 2 3
2 6
3 4

```