

function closeAlert() {
    document.getElementById("alert-box").style.display = "none";
}



const Generater_btn_node=document.getElementById("Generater_btn");
const input_node=document.getElementById('input_field')
const qr_node=document.getElementById('qrcode')
const png_btn_node=document.getElementById('png_btn')
const svg_btn_node=document.getElementById('svg_btn')
const downloda_btn=document.getElementById('download_btn')
const color_node=document.getElementById('color')

const qr_ani_node=document.getElementById('qr_ani')

let color_code='#000000';
let active_btn='';

color_node.addEventListener('change',()=>{
    color_code=color_node.value;
})

Generater_btn_node.addEventListener("click",()=>{
    let data=input_node.value;
    if(data.length == 0){
        document.getElementById('alert-box').style.display='block'
    }
    else{
        qr_ani_node.classList.toggle('hidden')
        qr_code(data);
        if(downloda_btn.classList.contains('hidden')){
            downloda_btn.classList.remove('hidden')
            downloda_btn.classList.add('visible')
        }
        else{
            downloda_btn.classList.add('hidden')
        }
    }
});

png_btn_node.addEventListener('click',()=>btn_click(png_btn_node))
svg_btn_node.addEventListener('click',()=>btn_click(svg_btn_node))

function btn_click(node){
    active_btn=node.innerHTML;
    node.classList.toggle('bg-blue-800')
    if(node.classList.contains('text-black')){
        node.classList.replace('text-black','text-white')
    }
    else{
        node.classList.replace('text-white','text-black')
    }
}


downloda_btn.addEventListener('click',downloadFile)

function downloadFile(){
    var imageURL = qr_node.childNodes[4].src;
        // Create a download link
    var link = document.createElement('a');
    link.download = `qr_code.${active_btn.toLowerCase()}`;
    link.href = imageURL;

        // Trigger click event on the link
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(()=>{
        qr_node.innerHTML=''
        if(downloda_btn.classList.contains('hidden')){
            downloda_btn.classList.remove('hidden')
            downloda_btn.classList.add('visible')
        }
        else{
            downloda_btn.classList.add('hidden')
        }
    },3000)
}


function qr_code(data){
    var qr = new QRCode(qr_node, {
        text: data,
        width: 280,
        height: 280,
        colorDark: color_code,
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H,
    });
}

