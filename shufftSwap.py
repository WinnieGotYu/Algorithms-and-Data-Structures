def check_shuffle(string_1, string_2, string_3): 
    string_1_pointer = 0
    string_2_pointer = 0
    for character in string_3:
        if string_1_pointer < len(string_1) and character == string_1[string_1_pointer]:
            string_1_pointer += 1
        elif string_2_pointer < len(string_2) and character == string_2[string_2_pointer]:
            string_2_pointer += 1
        else:
            return False
    return string_1_pointer == len(string_1) and string_2_pointer == len(string_2)


print(check_shuffle('135', '246789', '123456789'))
