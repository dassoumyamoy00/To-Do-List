let i=Number(1);


/*
	p
		span1
			button
		span1
		span2
		span3
			button
		span3
	p
*/


function addData()
{
	let s=document.getElementById("listinput").value;

	if(s!="")
	{
		//new paragraph
		let newpara=document.createElement("p");
		newpara.setAttribute("id", i);
		newpara.setAttribute("class", "para");

		//span1

		let span1=document.createElement("span");

		span1.setAttribute("class", "allspan1");
		span1.setAttribute("id", "span@"+i);

		let checkbutton=document.createElement("button");
		checkbutton.setAttribute("id", "check@"+i);
		checkbutton.setAttribute("class", "far fa-circle");
		checkbutton.setAttribute("onclick", "checkData(this.id)");

		span1.appendChild(checkbutton);

		newpara.appendChild(span1);

		//span2
		let span2=document.createElement("span");
		span2.textContent=s;
		span2.setAttribute("class", "allspan2");
		span2.setAttribute("id", "data@"+i);

		newpara.appendChild(span2);

		//span3
		let span3=document.createElement("span");

		span3.setAttribute("class", "allspan3");

		let deletebutton=document.createElement("button");
		deletebutton.setAttribute("id", i*-1);
		deletebutton.setAttribute("class", "fas fa-trash-alt");
		deletebutton.setAttribute("onclick", "deleteData(this.id)");

		span3.appendChild(deletebutton);

		newpara.appendChild(span3);

		document.getElementById("list").appendChild(newpara);

		++i;
	}

	document.getElementById("listinput").value="";

	return;
}

function checkData(myid)
{
	document.getElementById("data@"+extracti(myid)).style.textDecoration = 'line-through';
	document.getElementById(myid).remove();

	let tickbutton=document.createElement("button");
	tickbutton.setAttribute("id", "tick@"+extracti(myid));  //tick@i
	tickbutton.setAttribute("class", "far fa-check-circle");
	tickbutton.setAttribute("onclick", "deleteAndRestore(this.id)");

	document.getElementById("span@"+extracti(myid)).appendChild(tickbutton);
}

function deleteData(myid)
{
	let newid=-1*myid;
	document.getElementById(newid).remove();
	return;
}

function deleteAndRestore(myid)
{
	document.getElementById("data@"+extracti(myid)).style.textDecoration = "none";
	document.getElementById(myid).remove();

	let checkbutton=document.createElement("button");
	checkbutton.setAttribute("id", "check@"+extracti(myid));
	checkbutton.setAttribute("class", "far fa-circle");
	checkbutton.setAttribute("onclick", "checkData(this.id)");

	document.getElementById("span@"+extracti(myid)).appendChild(checkbutton);
}

function extracti(s)
{
	let l=s.length, i=parseInt(0);
	for(i=0; i<l; ++i)
		if(s.charAt(i)!='@') continue; else break;

	return parseInt(s.substring(i+1, l));
}