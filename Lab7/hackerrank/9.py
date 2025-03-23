
n = int(input()) 
arr = list(map(int, input().split()))

max_score = max(arr)
arr = [x for x in arr if x != max_score]
runner_up_score = max(arr)

print(runner_up_score)