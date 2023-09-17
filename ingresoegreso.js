var Ingreso_Acumulado = 0 ;
var Egreso_Acumulado = 0 ;

//código para agregar ingresos

let agregarDato=()=>{
    let valor=parseInt(document.getElementById('Valor').value);
    let descripcion=(document.getElementById('descripcion').value);
    let tipo=document.getElementById('tipo').value;

    if(tipo=="Ingreso"){
        let newboxent = document.createElement('div');
        newboxent.innerHTML=`
                <div class="elemento_descripcion" id="agregaringreso"> ${descripcion}
                </div>
                <div class="derecha limpiarEstilos">
                   <div id="" class="elemento_valor"> + ${valor}</div>
                   <div class="elemento_eliminar"><button class="elemento_eliminar--btn" onclick="eliminarIngreso()"> 
                   <ion-icon name="close-circle-outline"></i></button></div> 

        </div>
        `;
        
        newboxent.setAttribute('class', 'elemento limpiarEstilos');
        let nuevocontenedor=document.getElementById('ingreso_padre');
        nuevocontenedor.insertAdjacentElement('beforeend',newboxent);
 
//código para sumarlo en "ingresos"

        Ingreso_Acumulado=Ingreso_Acumulado+valor;
        document.getElementById('ingresos').innerHTML=`<p>${Ingreso_Acumulado}</p>
        `;
    }

//código para agregar egresos

    if(tipo=="Egreso"){
        let newboxent = document.createElement('div');
        newboxent.innerHTML=`
        <div class="elemento_descripcion"> ${descripcion}</div>
        <div class="derecha limpiarEstilos">
            <div class="elemento_valor"> - ${valor}</div>
            <div class="elemento_porcentaje">21%</div>
            <div class="elemento_eliminar"><button class="elemento_eliminar--btn" onclick="eliminarEgreso()"> 
            <ion-icon name="close-circle-outline"></i></button></div> 
            </div>
    </div>
        `;
        
        newboxent.setAttribute('class', 'elemento limpiarEstilos');
        let nuevocontenedor=document.getElementById('egreso_padre');
        nuevocontenedor.insertAdjacentElement('beforeend',newboxent);

        //código para restarlo en "egresos"

        Egreso_Acumulado=Egreso_Acumulado-valor;
        document.getElementById('egresos2').innerHTML=`<p>${Egreso_Acumulado}</p>
        `;
    }

}

//código para eliminar ingresos
let eliminarIngreso = () =>{
    let elemento =document.getElementById('ingreso_padre');
    let cajadelete=elemento.querySelector('.elemento')
    elemento.removeChild(cajadelete);
}

//código para eliminar egresos
let eliminarEgreso = () =>{
    let elemento =document.getElementById('egreso_padre');
    let cajadelete=elemento.querySelector('.elemento')
    elemento.removeChild(cajadelete);
}


