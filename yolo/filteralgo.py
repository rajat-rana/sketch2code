import json 

def remove_negative(data):
    for key, item in data.items():

        x=float(item['x'])
        y=float(item['y'])
        w=float(item['w'])
        h=float(item['h'])
        if(x<0):
            item['x']=0
        if(y<0):
            item['y']=0
        
        if((x+w)>1.0):
            item['w']=0.95-x
       
        if((y+h)>1.0):
            item['h']=0.95-y
        print(item['x']+item['y'])
      
    return data

def builddatax(ysl, data):
    for item in ysl:
        data[item[0]]['x']=item[1]
        data[item[0]]['w']=item[2]
    # print(data)
    return data
def builddatay(ysl, data):
    for item in ysl:
        data[item[0]]['y']=item[1]
        data[item[0]]['h']=item[2]
    # print(data)
    return data 


def same_height(ysl):
    # same function for xsl as well
    for i in range(len(ysl)-1):
        y1=ysl[i][1]
        h1=ysl[i][2]
        y2=ysl[i+1][1]
        h2=ysl[i+1][2]
        thres= 0.6
        if(y1==y2):
            if (h1/h2>thres or h2/h1>thres):
                ysl[i+1][2]= min(h1,h2)
                ysl[i][2]= min(h1,h2)
    return ysl  

def filterx(data):
    ylist=[]
    for key, item in data.items():
        ylist.append( [key, item["x"], item["w"]] )
    # print(ylist)
    ysl= sorted(ylist , key=lambda k: [k[1]])

    for i in range(len(ysl)-1):
        y1=ysl[i][1]
        h1=ysl[i][2]
        y2=ysl[i+1][1]
        h2=ysl[i+1][2]
        total=0
        comman=0
        thres=0.6
        if(y2<y1+h1):
            if(y2+h2<=y1+h1):
                comman=h2
                total=h1
            else:
                comman=y1+h1-y2
                total=min(h1,h2)
            if(comman/total>=thres):
                ysl[i+1][1]=min(y1,y2)
                ysl[i][1]=min(y1,y2)
                
    for item in ysl:
        print(item)
    ysl=same_height(list(ysl))
    for item in ysl:
        print(item)
    data=builddatax(list(ysl), data)
    return data
    


def filtery(data):
    ylist=[]
    for key, item in data.items():
        ylist.append( [key, item["y"], item["h"]] )
    # print(ylist)
    ysl= sorted(ylist , key=lambda k: [k[1]])

    for i in range(len(ysl)-1):
        y1=ysl[i][1]
        h1=ysl[i][2]
        y2=ysl[i+1][1]
        h2=ysl[i+1][2]
        total=0
        comman=0
        thres=0.6
        if(y2<y1+h1):
            if(y2+h2<=y1+h1):
                comman=h2
                total=h1
            else:
                comman=y1+h1-y2
                total=min(h1,h2)
            if(comman/total>=thres):
                ysl[i+1][1]=min(y1,y2)
                ysl[i][1]=min(y1,y2)
                
    for item in ysl:
        print(item)
    ysl=same_height(list(ysl))
    for item in ysl:
        print(item)
    data=builddatay(list(ysl), data)
    return data


def filterdata(data):
    data= remove_negative(data)
    data=filtery(data)
    data=filterx(data)
    return data
    
import os
import sys
if __name__=="__main__":

    #path of all jsons
    dir_path="./results/txts"
    dir_list=os.listdir(dir_path)
    jsonpaths=[]
    for item in dir_list:
        jsonpaths.append(os.path.join(dir_path, item ))
        

    for item in jsonpaths:

        with open(item, 'r') as f:
            data= json.load(f)
            data=filterdata(data)
        res_dir= "results/filtered"
        filename= os.path.basename(item)
        outfilepath= os.path.join(res_dir, filename)
        with open(outfilepath, 'w') as f:
            json.dump(data, f)
        # sys.exit(0)
