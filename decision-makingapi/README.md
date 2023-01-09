configure database.php 

database name = decision_making

**************************************************************************
**************************************************************************

API

[GET]READ (Get All)
http://localhost:8888/decision-makingAPI/api/read.php

[GET]SINGLE READ (Get by ID)
http://localhost:8888/decision-makingAPI/api/single_read.php?id=1

[POST]CREATED 
http://localhost:8888/decision-makingAPI/api/create.php?project_name=test02&email=user02@test.com&position=Test Engineer&testing_technique=Automated Testing&tools_name=test&project_result=Automated Testing

[POST]UPDATE
http://localhost:8888/decision-makingAPI/api/update.php?project_name=test02&email=user02@test.com&position=Test Engineer&testing_technique=Automated Testing&tools_name=test&project_result=Automated Testing

[DELETE]DELETE (Delete by id)
http://localhost:8888/decision-makingAPI/api/delete.php?id=1

