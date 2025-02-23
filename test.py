i = 2
x = int(input('number: '))
prime = True

while i < x:
    if x % i == 0:
        prime = False
    i+=1
if prime:
    print(f"{x} prime")
else:
    print('its not prime')