import outfit_func as of
import sys

# read output.txt from opencv api
with open('/home/d4/myflection/opencv_color/output.txt', 'r') as f:
    color_line = f.readline()
    rgb_values = color_line[1:-2].split(', ')

# set rgb values from opencv
in_col_r = rgb_values[0]
in_col_g = rgb_values[1]
in_col_b = rgb_values[2]

in_col_r = int(in_col_r)
in_col_g = int(in_col_g)
in_col_b = int(in_col_b)

formality = 'informal'

outfit_recommendation = of.find_outfit_recommend(in_col_r, in_col_g, in_col_b, formality)

print('outfit recommendations: ', outfit_recommendation)

with open("recommendations.txt", 'w') as sys.stdout:
	for recommendation in outfit_recommendation:
		print(recommendation)
