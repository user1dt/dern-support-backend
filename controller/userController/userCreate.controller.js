const prisma = require("../../config/prisma");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")

const createUser = async (req, res) => {
  try {

    const {name, email, password,phone} = req.body;

    const emailCheck = await prisma.user.findUnique({
      where: {
        email: email,
      },
    })

    if (emailCheck) {
       return res.status(400).json({
         message: "email already exists"
       })
    }

    const salt =  await bcrypt.genSalt(10);
    const hasPassword = await bcrypt.hash(password, salt)
    //to check password 
    const userRole = "USER";

    const saveUserData = await prisma.user.create({
          data:{
            name:name,
            email:email,
            phone:parseInt(phone),
            password:hasPassword,
            role: userRole,
          }
    })
    // const saveUserData = await prisma.user.create({
    //   data: {
    //     name: "Test User",
    //     email: "testuser@example.com",
    //     phone: "1234567890", // Ensure phone is a string if that's how it's defined
    //     password: "yourpassword",
    //     role: "USER", // Enum value should match exactly (case-sensitive)
    //   },
    // });

    const accessToken = jwt.sign(
      
      {
       id:saveUserData.id,
       email:saveUserData.email,
    },

     process.env.SECRET_KEY,
     {
       expiresIn: "1d",
     }
  )

   return res.status(201).json({
      message: "User created successfully",
      data: {
         id: saveUserData.id, 
         name: saveUserData.name, 
         email: saveUserData.email, 
         role: saveUserData.role 
      },
      accessToken:accessToken,
    })

  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = createUser;
