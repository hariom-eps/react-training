export const isLoading = (visible = true) => {
    if(visible){
        document.getElementById('loader-div').classList.remove('d-none');
    }else{
        document.getElementById('loader-div').classList.add('d-none');
    }
}