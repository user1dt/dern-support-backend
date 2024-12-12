
const prisma = require("../../config/prisma");

const repairCreate = async (req, res) => {
  try {

    const { device, serial, issue, description   } = req.body;  // get data from cilent with field
    
    const userid = req.user.id;

    if (!userid) {

      return res.status(404).json({
        message: "User Id not found",
      });
    }

    const saveData = await prisma.repair.create({
      data: {
        device_model:device,
        serial_number: serial,
        issue_type: issue,
        description,
        // imageUrl: image,
        userId: parseInt(userid),
      },
    });

    return res.status(200).json({
      message: "Data saved successfully",
      data: saveData,
    });
  } catch (error) {
    console.log(error)
    return res.status(500).json({
        message: "Error while saving data",
        error: error,
    })
  }
};

//read

const repairRead = async (req, res) => {
  try {
     const data = await prisma.repair.findMany()
     return res.status(200).json({
       message: "Data fetched successfully",
       data: data,
     });

  } catch (error) {
    return res.status(500).json({
      message: "Error while fetching data",
      error: error,
    });
  }
};

//update

const updateRepair = async (req, res) => {
    try {
        const {id} = req.params
        const { device_model, serial_number, issue_type, description, imageUrl} = req.body; //get userid from middleware called authcheck
        const userId = req.user.id;

        const updateRepair  = await prisma.repair.update({
            where:{
                id:parseInt(id)
            },
            data:{
              device_model,
              serial_number,
              issue_type,
              description,
              imageUrl,
                userId:userId

            }
        })

        return res.status(200).json({
            message: "Data updated successfully",
            data: updateRepair,
        });



        
    } catch (error) {
        return res.status(500).json({
            message: "Error while updating data",
            error: error,
        });
        
    }
}


const deleteRepair = async (req,res)=>{
       try {
        const {id} = req.params

        const  repairDelete = await prisma.repair.delete({
            where:{
                id: parseInt(id)
            }
        })
        
        return res.status(200).json({
            message: "Data deleted successfully",
            data: repairDelete,
        });

        
       } catch (error) {
        return res.status(500).json({
            message: "Error while deleting data",
            error: error,
        });
        
       }

}



//delete

module.exports = {
  repairCreate,
  repairRead,
  updateRepair,
  deleteRepair
};
