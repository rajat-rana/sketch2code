
function myFunction()
	{
        // theUrl="http://127.0.0.1:8000/wireframes/"
        // path=theUrl;
        // function httpGetAsync(theUrl, callback)
        // {
        //     var xmlHttp = new XMLHttpRequest();
        //     xmlHttp.onreadystatechange = function() { 
        //         if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
        //             callback(xmlHttp.responseText);
        //     }
        //     xmlHttp.open("GET", theUrl, true); // true for asynchronous 
        //     xmlHttp.send(null);
        // }
        fi=2;
        var qs = window.location.search;
        const urlParams = new URLSearchParams(qs);
        id= urlParams.get('id');
        filter=urlParams.get('filter');
        console.log(filter);
        console.log(id);
        if(filter=="true") path="../darknet/results/filtered/test" +id+".json";
        else path="../darknet/results/txts/test" +id+".json";
        // path="../darknet/test/test.json"
        console.log(path)

        $.getJSON(path, function(jsondata) {
            console.log(jsondata); // this will show the info it in firebug console
            noOfElements = Object.keys(jsondata).length;
            console.log(noOfElements);
            for(var i=0; i<noOfElements; i++){
                key="id"+i;
                ele=jsondata[key];
                if (ele.classId==0) add_link(ele);
                if (ele.classId==1) add_image(ele);
                if (ele.classId==2) add_paragraph(ele);
                if (ele.classId==3) add_checkbox(ele);
                if (ele.classId==4) add_textbox(ele);
                if (ele.classId==5) add_selectbox(ele);
                if (ele.classId==6) add_label(ele);
                if (ele.classId==7) add_heading(ele);
                if (ele.classId==8) add_radio(ele);
                if (ele.classId==9) add_button(ele);
            }    
        });
	}
function spread_full(ele){
    ele.style.width="100%";
    ele.style.position="absolute";
    ele.style.height="100%";
    // ele.style.paddingLeft="5%";
    // ele.style.paddingTop="5%";
    
    // ele.style.display="block";
    return ele;
}
function set_position(ele, data){
    ele.style.position= "absolute";
    ele.style.marginLeft=data.x*100+"%";
    ele.style.marginTop=data.y*100+"%";
    ele.style.width=data.w*100+"%";
    ele.style.height=data.h*100+"%";
    return ele;
}
function add_link(data){
    var ele= document.createElement('div');
    var link = document.createElement('a');
    link.href='google.com';
    link.innerHTML="Link name";
    link.style.fontSize=data.h*500+"px";
    // var p= document.createElement('p');
    // p.style.textAlign="justify";
    // link.appendChild(p);
    // p.innerHTML="Link name";
    
    // link.style.textAlign="justify";

    ele.appendChild(link);
    ele= set_position(ele, data);
    document.getElementById("mydiv").appendChild(ele);
}
function add_label(data){
    var ele= document.createElement('div');
    var label = document.createElement('label');
    label.appendChild(document.createTextNode('Label Text'));

    ele.appendChild(label);
    ele= set_position(ele, data);
    document.getElementById("mydiv").appendChild(ele);
}
function add_image(data){
    var img = document.createElement("img");
    // random = random.rand
    var x = Math.floor((Math.random() * 10) + 1);
    x=x%6; if(x==0) x=1;
    src="./imgs/"+ x+".png";
    img.setAttribute("src", src );
    img= set_position(img, data);
    document.getElementById("mydiv").appendChild(img);
}
function add_paragraph(data){
    var ele = document.createElement("div");
    var p = document.createElement("p");
    para="";
    para1= "Sunset is the time of day when our sky meets the outer space solar winds. ";
    // para1= "Top Physics Educator eighty percent questions in NEET19 were directly from my lessons. "
    // para1="Enroll in courses and watch lessons from India's best educators. "

    
    
    nop=1;
    nop= Math.floor(data.h*data.w/0.016)
    // if(data.h*data.w <0.01) para= para1;
    // else if(data.h*data.w >0.01) { }
    // else if(data.h*data.w >0.01) para= para1;
    // else if(data.h*data.w >0.01) para= para1;

    while(nop--){para= para+ para1;}
    
    var y = document.createTextNode(para);
    p.appendChild(y);
    p=spread_full(p);
    ele= set_position(ele, data);
    ele.appendChild(p);
    document.getElementById("mydiv").appendChild(ele);
}   
function add_heading(data){
    var ele = document.createElement("div");
    var h1= document.createElement("h1");
    var content = document.createTextNode("TOP RESTAURANTS");
    h1.appendChild(content);
    h1= spread_full(h1);

    ele= set_position(ele, data);    
    ele.appendChild(h1);
    document.getElementById("mydiv").appendChild(ele);
}   
function add_textbox(data){
    var ele = document.createElement("div");
    
    var tb = document.createElement("input");
    tb.setAttribute("type", "text");
    tb.setAttribute("value", "Write the text here");
    tb=spread_full(tb);

    ele= set_position(ele, data);   
    ele.appendChild(tb);
    document.getElementById("mydiv").appendChild(ele);
}

function add_button(data){
    var ele = document.createElement("div");
    var btn = document.createElement("input");
    btn.setAttribute("type", "button");
    btn.setAttribute("value", "BUTTON");
    // btn.style.fontSize=data.h*400+"px";
    

    ele= set_position(ele, data);
    // btn=spread_full(btn);
    
    ele.appendChild(btn)
    document.getElementById("mydiv").appendChild(ele);
}
function add_selectbox(data){
    var ele= document.createElement("div");
    var sel = document.createElement("select");
    sel.style.fontSize=data.h*400+"px";
    for (var i=0;i < 5;i++)
            {
                var option = new Option ("Text " + i, "Value" + i);
                sel.options[sel.options.length] = option;
            }
    ele= set_position(ele, data);
    ele.appendChild(sel);
    document.getElementById("mydiv").appendChild(ele);
}
function add_radio(data){
    var ele= document.createElement("div");    
    var radio = document.createElement("input");
    radio.setAttribute("type", "radio");
    radio.setAttribute("value", "radio");
    radio.style.width=data.h*400+"px";
    var label= document.createElement('label');
    label.appendChild(document.createTextNode('Radio'));    

    ele= set_position(ele, data);
    ele.appendChild(radio)
    ele.appendChild(label)
    document.getElementById("mydiv").appendChild(ele);
}
function add_checkbox(data){
    var ele = document.createElement('div');   
    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.name = "name";
    checkbox.value = "value";
    checkbox.id = "id";
    checkbox.style.width=data.h*400+"px";
    var label = document.createElement('label')
    label.htmlFor = "id";
    label.appendChild(document.createTextNode('Checkbox'));
    
    ele= set_position(ele, data);
    ele.appendChild(checkbox);
    ele.appendChild(label);
    document.getElementById("mydiv").appendChild(ele);
}
