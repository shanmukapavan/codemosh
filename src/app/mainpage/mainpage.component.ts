import { Component, OnInit } from '@angular/core';

interface courses {
  value: string;
  viewvalue: string;
}
interface authors {
  value: string;
  viewvalue: string;
}

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css'],
})
export class MainpageComponent implements OnInit {
  courses: courses[] = [
    { value:'All ', viewvalue:'All'},
    { value: 'FrontEnd-0', viewvalue: 'FrontEnd' },
    { value: 'BackEnd-1', viewvalue: 'BackEnd' },
    { value: 'Mobile-2', viewvalue: 'Mobile' },
  ];

  authors: authors[] = [
    { value:'All ', viewvalue:'All'},
    { value: 'pawan-0', viewvalue: 'Pawan' },
    { value: 'bharath-1', viewvalue: 'bharath' },
    { value: 'ram-2', viewvalue: 'ram' },
  ];
 public selected: string = '';
 public selectedCategory="All";
 public selectedauthor="All";
 public selectedAuthor:string=''
//  public selectedAuthor:string="";
 public selectedSearch:string ="";
 public  name:any="";
 public dummy:any=[]
 public dummy2:any=[]
 public dummy3:any=[]
 public showdummyarray:boolean=true
 public shownamearray:boolean=false
 public showauthorarray:boolean=false
 public authorvar:string=''
 public searchauto:string=''
 public searcharray:any=[]
 public showsearcharray:boolean=false
  
  
  
  CourseList = [
    {
      id: '1',
      title: 'angularmaster',
      description: 'Angular master course',
      author: 'Pawan',
      coursetype: 'FrontEnd',
      'course img': '',
    },
    {
      id: '2',
      title: 'reactmaster',
      description: 'React master course',
      author: 'ram',
      coursetype: 'FrontEnd',
      courseimg: '',
    },
    {
      id: '3',
      title: 'html',
      description: 'React master course',
      author: 'bharath',
      coursetype: 'FrontEnd',
      'course img': '',
    },
    {
      id: '4',
      title: 'sql',
      description: 'React master course',
      author: 'Pawan',
      coursetype: 'BackEnd',
      'course img': '',
    },
    {
      id: '5',
      title: 'node.js',
      description: 'React master course',
      author: 'ram',
      coursetype: 'BackEnd',
      'course img': '',
    },
    {
      id: '6',
      title: 'ultimatereact-native',
      description: 'React master course',
      author: 'bharath',
      coursetype: 'BackEnd',
      'course img': '',
    },
    {
      id: '7',
      title: 'Xamarin Forms:Build Native Mobile',
      description: 'React master course',
      author: 'ram',
      coursetype: 'Mobile',
      'course img': '',
    },
    {
      id: '8',
      title: 'ultimate-react-native-series:fundamentals',
      description: 'React master course',
      author: 'Pawan',
      coursetype: 'Mobile',
      'course img': '',
    },
    {
      id: '9',
      title: 'ultimate-react-native-series-advanced',
      description: 'React master course',
      author: 'bharath',
      coursetype: 'Mobile',
      'course img': '',
    },
  ];

  constructor() {
    this.dummy=this.CourseList
  }

  ngOnInit(): void {
    this.searcharray=this.dummy
  }

  
  FilterCat(val:any){
    console.log(val)
    if(this.showauthorarray === true)
    {
      console.log("check",this.dummy)
      this.dummy3=this.CourseList.filter((r:any)=>r.coursetype === val)
      console.log("dummy3 dfvwdf", this.dummy3)
      this.dummy2 = this.dummy3.filter((r:any)=>r.author === this.authorvar)
    }
    else{
    this.dummy = this.CourseList.filter(r =>r.coursetype === val)
    this.shownamearray=false
    this.showsearcharray=false
      console.log("dummy",this.dummy)
    }
    };

  FilterAut1(auto:any){
    console.log(auto);
    this.dummy2 = this.dummy.filter((i:any)=>i.author == auto)
    this.authorvar = auto
    this.showauthorarray=true
    this.shownamearray=false
    this.showdummyarray=false
    this.searcharray=false
    console.log("My auto",this.dummy2)
  }
  

   Searchresult(ser:any){
     this.searchauto=ser.target.value
     this.searcharray = []
     this.showsearcharray=true
     this.showdummyarray=false
     this.dummy.forEach((item:any) => {
      const i = this.searcharray.findIndex((k:any)=>k.title===this.searchauto)
       if(item.title.indexOf(this.searchauto)>=0){
         if(i === -1){
         this.searcharray.push(item)
         console.log(this.searcharray)
         }
       }
       if(item.title.indexOf(this.searchauto) === -1){
         if(i>=0)
         {
          console.log(i)
         }
        
       }
       if(this.searchauto ==="")
       {
         this.searcharray=[]
         this.searcharray=[...this.dummy]
       }
      
       

         
           
     });


    // console.log(ser.target.value);
    // this.CourseList.map((r:any)=>{
    //   if(r.title === ser.target.value)
    //   {
    //     console.log("My item",r.title,ser.target.value)
    //     this.selectedSearch=r.title
    //     console.log(this.selectedSearch)
    //   }
    //   if(ser.target.value===""){
    //     this.selectedSearch=""
    //     this.showdummyarray=true

    //   }
    // })
     };
    onClick(click:string){
      console.log(click)
      this.name=this.CourseList.filter(c=>c.title===click)
      this.showdummyarray=false
      this.shownamearray=true
      console.log("array",this.name)
    };
  }



