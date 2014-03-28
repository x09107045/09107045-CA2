<script>
function cmConverter(){
document.converter.inch.value = document.converter.cm.value / 2.54
//document.converter.feet.value = document.converter.cm.value / 30.48
}
function inchConverter(){
document.converter.cm.value = document.converter.inch.value * 2.54
//document.converter.feet.value = document.converter.inch.value / 12
}
//-->

function convert(degree)
{
if (degree=="C")
 {
 F=document.getElementById("c").value * 9 / 5 + 32;
 document.getElementById("f").value=Math.round(F);
 }
else	
 {
 C=(document.getElementById("f").value -32) * 5 / 9;
 document.getElementById("c").value=Math.round(C);
 }
}
</script>