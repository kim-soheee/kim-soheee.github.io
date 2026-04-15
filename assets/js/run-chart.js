const charts = [
        "./kmcharts_svg/chart00.svg", 
        "./kmcharts_svg/chart01.svg", 
        "./kmcharts_svg/chart02.svg", 
        "./kmcharts_svg/chart03.svg", 
        "./kmcharts_svg/chart04.svg", 
        "./kmcharts_svg/chart05.svg", 
        "./kmcharts_svg/chart06.svg", 
        "./kmcharts_svg/chart07.svg", 
        "./kmcharts_svg/chart08.svg",
        "./kmcharts_svg/chart09.svg", 
        "./kmcharts_svg/chart10.svg", 
        "./kmcharts_svg/chart11.svg", 
        "./kmcharts_svg/chart12.svg", 
        "./kmcharts_svg/chart13.svg", 
        "./kmcharts_svg/chart14.svg", 
        "./kmcharts_svg/chart15.svg", 
        "./kmcharts_svg/chart16.svg", 
        "./kmcharts_svg/chart17.svg", 
        "./kmcharts_svg/chart18.svg", 
        "./kmcharts_svg/chart19.svg", 
        "./kmcharts_svg/chart20.svg", 
        "./kmcharts_svg/chart21.svg", 
        "./kmcharts_svg/chart22.svg", 
        "./kmcharts_svg/chart23.svg", 
        "./kmcharts_svg/chart24.svg", 
        "./kmcharts_svg/chart25.svg", 
        "./kmcharts_svg/chart26.svg", 
        "./kmcharts_svg/chart27.svg", 
        "./kmcharts_svg/chart28.svg", 
        "./kmcharts_svg/chart29.svg", 
        "./kmcharts_svg/chart30.svg", 
        "./kmcharts_svg/chart31.svg", 
        "./kmcharts_svg/chart32.svg", 
        "./kmcharts_svg/chart33.svg", 
        "./kmcharts_svg/chart34.svg", 
        "./kmcharts_svg/chart35.svg", 
        "./kmcharts_svg/chart36.svg", 
        "./kmcharts_svg/chart37.svg", 
        "./kmcharts_svg/chart38.svg", 
        "./kmcharts_svg/chart39.svg", 
        "./kmcharts_svg/chart40.svg", 
        "./kmcharts_svg/chart41.svg", 
        "./kmcharts_svg/chart42.svg", 
        "./kmcharts_svg/chart43.svg", 
        "./kmcharts_svg/chart44.svg", 
        "./kmcharts_svg/chart45.svg", 
        "./kmcharts_svg/chart46.svg"
];

let index = 45;

function update() {
  document.getElementById("chart").src = charts[index];
}

document.querySelector('.prev.kmchart-button').addEventListener('click', () => {
    if (index > 0) {
        index--;
        update();
    }
})

document.querySelector('.next.kmchart-button').addEventListener('click', () => {
    if (index < charts.length - 1) {
        index++;
        update();
    }
})