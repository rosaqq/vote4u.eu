import os, json

with open('in.txt', 'r', encoding='utf-8') as f:
    lines = f.readlines()

res = []
i = 1

for line in lines:
    arr = line.split()
    if len(arr)>1:
        party = arr.pop()
        struct = {
                "pos": i,
                "first_name": arr[2],
                "last_name": " ".join(arr[3:]),
                "bio": "...",
                "group": "",
                "local_party": party,
                "img_name": "",
                "tags": []
            }
        res.append(struct)
        i += 1

with open('out.json', 'w', encoding='utf-8') as a:
    json.dump(res, a, indent=4)