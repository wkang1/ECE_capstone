import color_func as cf

# read output.txt from colorthief api
with open(/home/d4/myflection/colorthief/output.txt, 'r') as f:
    rgb_values = f.split(' ')

# set rgb values from colorthief
in_col_r = rgb_values[0]
in_col_g = rgb_values[1]
in_col_b = rgb_values[2]

in_col_r = int(in_col_r)
in_col_g = int(in_col_g)
in_col_b = int(in_col_b)

in_col = (in_col_r,in_col_g,in_col_b)

[color_name, color_recommendations] = cf.find_color_recommend(in_col_r, in_col_g, in_col_b)


'''
print("Color name:", color_name)
print("Color recommendations:", end=" ")
for x in color_recommendations:
    print(x, end=" ")
'''
