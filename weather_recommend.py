import weather_func as wf

[seas, cond, temp] = wf.find_weather()

print('Current Season:', seas)
print('Current Condtion:', cond)
print('Current Temperature:', temp)