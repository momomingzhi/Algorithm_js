/*
At a lemonade stand, each lemonade costs $5. Customers are standing in a queue to buy from you and order one at a time (in the order specified by bills). Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill. You must provide the correct change to each customer so that the net transaction is that the customer pays $5.

Note that you do not have any change in hand at first.

Given an integer array bills where bills[i] is the bill the ith customer pays, return true if you can provide every customer with the correct change, or false otherwise.



Example 1:

Input: bills = [5,5,5,10,20]
Output: true
Explanation:
From the first 3 customers, we collect three $5 bills in order.
From the fourth customer, we collect a $10 bill and give back a $5.
From the fifth customer, we give a $10 bill and a $5 bill.
Since all customers got correct change, we output true.
Example 2:

Input: bills = [5,5,10,10,20]
Output: false
Explanation:
From the first two customers in order, we collect two $5 bills.
For the next two customers in order, we collect a $10 bill and give back a $5 bill.
For the last customer, we can not give the change of $15 back because we only have two $10 bills.
Since not every customer received the correct change, the answer is false.

* */
// 내가 짠 코드..
// 20까지 케이스의 경우를 나눴어야했음..
var lemonadeChange = function(bills) {
    let sum = bills.reduce((a,b) => a+b);
    console.log(sum);
    let cnt = 0;
    let res = true;
    for(let value of bills){
        if(value === 5) cnt += value;
        else if(value > 5){
            let tmp = value - 5;
            if(cnt - tmp <0){
                res = false;
            }
            else{
                cnt -= 5;
                cnt += tmp;
            }
        }

    }
    return res
    console.log(res)
};

var lemonadeChange = function(bills) {
    let five = 0, ten = 0;
    for(let bill of bills){
        if(bill === 5) five++;
        else if(bill === 10){
            ten++;
            if(five === 0) return false;
            else five--;
        }
        else{
            //20
            let change = 15;
            if(ten > 0){
                ten--;
                change -= 10
            }
            while(change >0){
                five--;
                if(five <0) return false;
                change-=5;
            }
        }
    }
    return true;
};