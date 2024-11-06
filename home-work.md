# HOME WORK

1. 
> Funksiya yarating u array olsin va arrayling birinchi elementini( 0 indexda turganini ) qaytarsin
### Examples

```js
getFirstValue([1, 2, 3]) ➞ 1

getFirstValue([80, 5, 100]) ➞ 80

getFirstValue([-500, 0, 50]) ➞ -500
```

2. 
> Function yarating array turidagi paramert olsin va faqat arrayning just qiymatlarni yig'ib qaytarsin.

```js
getOddValue([1, 2, 3,6]) ➞ [2,6]
```

3. 
> `incrementItems` degan Function yarationg u array ([]) turidagi qiymat olsin va har bir elementga 1 qiymat qo'shib qaytarsin

```js
incrementItems([0, 1, 2, 3]) ➞ [1, 2, 3, 4]

incrementItems([2, 4, 6, 8]) ➞ [3, 5, 7, 9]
```

4. 
> Function yarating u array qabul qilsin va arrayning ohirgi qiymatini qaytarsin!.

```js
getLastItem([1, 2, 3]) ➞ 3
```

5. 
> Function yarating u array va son oldin, bizga sonning indexni qaytarsin agarda u bo'lsa yoki u yo'q bo'lsa -1 qaytarsin

```js
search([1, 5, 3], 5) ➞ 1
search([1, 2, 3], 4) ➞ -1
```

6. 
> Function yarating u array qabul qilsin va arraylarning ichidagi qiymatlarning yig'indisini qaytarsin

```js
sumArray([1, 2, 3, 4, 5]) ➞ 15
```

7. 
> Function yarating u number qabul qilsin va object qaytarsin 
	Ilm uchun 50% qismini ajratsin
>   Harajatlar uchun 30% qismini ajrtsin
>   kelajak uchun 20% qismini ajratsin

```js
fiftyThirtyTwenty(10000) ➞ { "ilm": 5000, "harajat": 3000, "kelajak": 2000 }
```

8. 
> Function yarating u (num1, num2, array) qiymatlarini qabul qilsin va num1 bilan num2 oralig'idagi arrayning elementlarni qaytarsin.

```js
arrBetween(3, 8, [1, 5, 95, 0, 4, 7]) ➞ [5, 4, 7]
```

9. 
> Function yarating u **array** va **num** olsin ==(array, num)== va arraning ichida num bo'lsa **true** bo'lmasa **false** qiymat qaytarsin
```js
check([1, 2, 3, 4, 5], 3) ➞ true

check([1, 1, 2, 1, 1], 3) ➞ false
```

10. 
> Function yarating u **array** qabul qilsin va **array** ning elementlarni **type**ni  qaytarsin

```js
arrayValuesTypes([1, 2, "salom") ➞ ["number", "number", "string", "object"]
```