f = open("feedback.txt", "a")
username = input("Name: ")
f.write(username)
f.write("")
feedback = input("Feedback:")
f.write(feedback)
f.close()

#open and read the file after the appending:
f = open("feedback.txt", "r")
print(f.read())
