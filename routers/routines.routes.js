const express = require('express');
const router = express.Router();
const Routine = require('../models/routines');


router.post("/add", async (req,res) => {   
    await Routine.create(req.body)
    .then(() => {
        res.status(200).send("Task added successfully");
    }).catch((err) => {
        res.status(400).send("Something wrong with the Task, try again");
        console.error(err);
    })
});

router.get('/', async (req, res) => {
    await Routine.find({})
    .then((routines) => {
        res.status(200).send(routines);
    })
    .catch((err) => {
        res.status(400).send("Something wrong with the Task, try again");
        console.log(err);
    })
});

router.get('/findById/:id', async (req, res) => {
    await Routine.find({_id : req.params.id})
    .then((routine) => {
        res.status(200).send(routine);
    })
    .catch((err) => {
        res.status(400).send("Something wrong with the ID, try again");
        console.log(err);
    })
});

router.get('/findByTitle/:title', async (req, res) => {
    await Routine.find({title:req.params.title})
    .then((routine) => {
        res.status(200).send(routine);
    })
    .catch((err) => {
        res.status(400).send("Something wrong with the Title, try again");
        console.log(err);
    })
});

router.get('/findByDescription/:Description', async (req, res) => {
    await Routine.find({description : req.params.description})
    .then((routine) => {
        res.status(200).send(routine);
    })
    .catch((err) => {
        res.status(400).send("Something wrong with the Title, try again");
        console.log(err);
    })
});

router.get('/findByPriority/:priority', async (req,res) => {
    await Routine.find({priority: req.params.priority})
    .then((routine) => {
        res.status(200).send(routine)
    })
    .catch((err) => {
        res.status(400).send("Something wrong with the Title, try again");
        console.log(err);
    })
});

router.get('/findByStatus/:Status', async (req, res) => {
    await Routine.find({status: req.params.status})
    .then((routine) => {
        res.status(200).send(routine);
    })
    .catch((err) => {
        res.status(400).send("Something wrong with the Title, try again");
        console.log(err);
    })
});

router.get('/findByTerm/:term', async (req, res) => {
    await Routine.find({term:req.params.term})
    .then((routine) => {
        res.status(200).send(routine);
    })
    .catch((err) => {
        res.status(400).send("Something wrong with the Title, try again");
        console.log(err);
    })
});

router.put("/update/:id", async (req, res) => {
    await Routine.updateOne({_id : req.params.id},req.body)
    .then(() => {
        res.status(200).send("Successfully updated");
    })
    .catch((err) => {
        res.status(400).send("Something wrong with the Title, try again");
        console.log(err);
    });
});

router.put("/update/:Title", async (req, res) => {
    await Routine.updateOne({ title: req.params.title},req.body)
    .then(() => {
        res.status(200).send("Successfully updated");
    })
    .catch((err) => {
        res.status(400).send("Something wrong with the Title, try again")
        console.log(err);
    });
});


router.delete("/delete/:id", async (req, res) => {
    await Routine.deleteOne({_id : req.params.id})
    .then(() => {
        res.status(200).send("Successfully deleted");
    })
    .catch((err) => {
        res.status(400).send("Something wrong with the Title, try again");
        console.log(err);
    });

});

router.delete("/delete/:Title", async (req, res) => {
    await Routine.deleteOne({title:req.params.title})
    .then(() => {
        res.status(200).send("Successfully deleted");
    })
    .catch((err) => {
        res.status(400).send("Something wrong with the Title, try again")
        console.log(err);
    });
});



module.exports = router;





































































































































