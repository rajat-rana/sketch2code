# sketch2code
Converts hand-drawn wireframes in html webpages

Project is divided in two parts:
1. generating prediction through yolo (yolo folder)
2. rendering those predictions on webpage (html folder)


## Pre-requisites:
Ensure you have opencv installed

## How to run the project?
1. Clone this repository first
2. Go inside yolo directory on terminal
3. Give command 'make'
4. run the script object_detection_yolo.py by giving command 
'''
python3 object_detection_yolo.py --image path/to/input/image
'''
(There are some sample images in 'test' folder)
'''
python3 object_detection_yolo.py --image test/1.png
'''
## Results
Resultant image from yolo predicitons will be generated in 'test' folder itself by the name '1_yolo_out_py.jpg'.
A test.json file will also be saved in the same folder. This file contains absolute locations of the detected elements. 
This will be used in the next part when we generate the webpage. 
