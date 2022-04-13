def find_weather():
    with open('Output.txt') as f:
        lines = f.readlines()

    count = 0
    for line in lines:
        count += 1
        if (count == 10):
            seas_int = line
        elif (count == 19):
            cond = line
        elif (count == 34):
            temp = line
        else:
            continue

    seas_int = seas_int[21:23]
    seas_int = int(seas_int)
    seas = ''

    if (seas_int < 3) | (seas_int == 12):
        seas = 'winter'
    elif (3 <= seas_int < 6) | (9 <= seas_int < 12):
        seas = 'spring'
    elif (6 <= seas_int < 9):
        seas = 'summer'
    else:
        seas = None
        
    len_c = len(cond)
    cond = cond[13:(len_c-3)]

    len_t = len(temp)
    temp = temp[16:(len_t-2)]

    return [seas, cond, temp]