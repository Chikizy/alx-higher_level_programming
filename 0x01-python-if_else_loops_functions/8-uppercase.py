def uppercase(str):
    new_str = ""
    for c in str:
        if ord(c) >= 97 and ord(c) <= 122:
            c = chr(ord(c) - 32)
        new_str = new_str + c
    print("{}".format(new_str))
