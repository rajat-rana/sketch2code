# sketch2code
Converts hand-drawn wireframes in html webpages

Project is divided in two parts:
1. Generating prediction through yolo (yolo folder)
2. Rendering those predictions on webpage (html folder)


## Pre-requisites:
Ensure you have opencv installed

## Set-up
1. Clone this repository first
2. Download weights from here: https://drive.google.com/open?id=10OJ_phQxn9K-LbK23uFPtQpjN8Geur6C
3. Copy weights in 'yolo/weights' folder

## Run object detection
1. Go inside yolo directory on terminal
2. Give command 'make'
3. run the script object_detection_yolo.py by giving command 
```bash
python3 object_detection_yolo.py --image path/to/input/image
```
(There are some sample images in 'test' folder) Here is a sample command.
```bash
python3 object_detection_yolo.py --image test/temp.jpg
```
## Results
Resultant image from yolo predicitons will be generated in 'test' folder itself by the name 'temp_yolo_out_py.jpg'.
A test.json file will also be saved in the same folder. This file contains absolute locations of the detected elements. 
This will be used in the next part when we generate the webpage. 
