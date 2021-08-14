const Bookmark = require('../models/bookmark')
const router = require('express').Router();

//I
router.get('/', async (req,res)=>{
  try{
    const bookmarkIndex = await Bookmark.find({})
    res.status(200).json(bookmarkIndex)
  }catch(err){console.error(err)
    res.status(404).json({message:err.message})
  }
})

//C
router.post('/', async (req, res)=>{
  try{
    const bookmarkCreate = await Bookmark.create(req.body)
    res.status(200).json(bookmarkCreate)
  }catch(err){console.error(err)
    res.status(404).json({message:err.message})
  }
})

//R
router.get('/:id', async (req,res)=>{
  try{
    const bookmarkRead = await Bookmark.findById(req.params.id)
    res.status(200).json(bookmarkRead)
  }catch(err){console.error(err)
    res.status(404).json({message:err.message})
  }
})

//U
router.put('/:id', async (req,res)=>{
  try{
    const bookmarkUpdate = await Bookmark.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).json(bookmarkUpdate)
  }catch(err){console.error(err)
    res.status(404).json({message:err.message})
  }
})

//D
router.delete('/:id', async (req,res)=>{
  try{
    const bookmarkDelete = await Bookmark.findByIdAndDelete(req.params.id);
    res.status(200).json(bookmarkDelete)
  }catch(err){console.error(err)
    res.status(404).json({message:err.message})
  }
})

module.exports = router;
