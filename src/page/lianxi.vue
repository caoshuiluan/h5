<template>
    <script>
        function updateDate(obj){
            $ajax({
                type:"get",
                url:"http",
                data:{"id":obj.id},
                dataType:"json",
                success:function(d){
                    console.log(d);
                    var temper=d.data.temper;
                    obj.setAtribute("monitorData/温度"，temper)
                }
            })
        }
    </script>
</template>
