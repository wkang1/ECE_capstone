import color_func as cf

in_col_r = input("Enter R Value: ")
in_col_g = input("Enter G Value: ")
in_col_b = input("Enter B Value: ")

in_col_r = int(in_col_r)
in_col_g = int(in_col_g)
in_col_b = int(in_col_b)

in_col = (in_col_r,in_col_g,in_col_b)

[color_name, color_recommendations] = cf.find_color_recommend(in_col_r, in_col_g, in_col_b)

print("Color name:", color_name)
print("Color recommendations:", end=" ") 
for x in color_recommendations: 
    print(x, end=" ")