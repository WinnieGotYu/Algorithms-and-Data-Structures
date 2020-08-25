# Randomly selects question from dir
# for review and opens question in VS code
# version 1

import os
from random import randint
allQuestions = os.listdir()
question = allQuestions[randint(0, len(allQuestions) + 1)]
print(f'STUDY: {question}')
myCmd = f"code {question}"
os.system(myCmd)