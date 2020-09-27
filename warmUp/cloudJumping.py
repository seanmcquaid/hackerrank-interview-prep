c = [0,0,1,0,0,0,1,0]
def jumpingOnClouds(c):
        lengthOfArray = len(c)
        print lengthOfArray
        stepCount = 0
        i = 0
        while i < lengthOfArray-1:
                if i+2 >= lengthOfArray or c[i+2] == 0:
                        i += 2
                else: 
                        i += 1
                stepCount += 1
        print stepCount

jumpingOnClouds(c)