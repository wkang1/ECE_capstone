import outfit_func as of

# in_col_r = input("Enter R Value: ")
# in_col_g = input("Enter G Value: ")
# in_col_b = input("Enter B Value: ")

in_col_r = '10'
in_col_g = '10'
in_col_b = '10'

in_col_r = int(in_col_r)
in_col_g = int(in_col_g)
in_col_b = int(in_col_b)

formality = 'informal'

outfit_recommendation = of.find_outfit_recommend(in_col_r, in_col_g, in_col_b, formality)

print('outfit recommendations: ', outfit_recommendation)