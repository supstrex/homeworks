#include <iostream>

using namespace std;

char *strcat(char *s1, char *s2);
char *strset(char *s, char ch);
char *strmove(char *s, int n);
int main()
{
    char s1[] = "something";
    char s2[] = "else";
    cout << strcat(s1, s2) << endl;
    cout << strset(s1, 'd') << endl;
    cout << strmove(s2, 3) << endl;
    return 0;
}

char *strcat(char *s1, char *s2)
{
    int count1 = 0;
    while (*(s1 + count1) != '\0')
    {
        count1++;
    }
    int count2 = 0;
    while (*(s1 + count2) != '\0')
    {
        count2++;
    }
    for (int i = 0; i <= count2; i++)
    {
        *(s1 + count1 + i) = *(s2 + i);
    }
    return s1;
}

char *strset(char *s, char ch)
{
    int count = 0;
    while (*(s + count) != '\0')
    {
        *(s + count) = ch;
        count++;
    }
    return s;
}

char *strmove(char *s, int n)
{
    int count = 0;

    while (*(s + count) != '\0')
    {
        count++;
    }

    char* newArr = new char[count+1];

    while (n > count)
    {
        n = n - count;
    }

    for (int i = 0; i < count; i++)
    {
        if (n + i < count)
        {
            newArr[n + i] = *(s + i);
        }
        else
        {
            newArr[n + i - count] = *(s + i);
        }
    }
    newArr[count] = '\0';

    return newArr;
}
