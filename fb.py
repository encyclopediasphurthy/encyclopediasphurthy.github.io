form = driver.find_element_by_id('feedback')

f = open("encyclopediasphurthy.github.io/feedback.txt", "a")
f.write(form)
f.close()

#open and read the file after the appending:
f = open("demofile2.txt", "r")
print(f.read())
