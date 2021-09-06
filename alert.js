console.log('i am here');

alert('Ma is coming!!');

const maComing = () => {
    alert('Ammu is coming. Open the book');
}

const askPicnic = () => {
    const response = confirm('Are you going to picnic?');
    console.log(response);
    if (response === true) {
        alert('amake fee ta bKash kore de');
    }
    else {
        console.log('DGM !!! Door e giya mor!!!');
    }
}

const askName = () => {
    const name = prompt('What is your name?');
    if (name) {
        console.log(name)
    }
}

const marryMe =()=> {
    const response = confirm('you are agree');
    console.log(response);
    if (response === true){
        alert('cholo biye kore feli');

    } else{
        console.log('Dure gia mor');
    }

    }