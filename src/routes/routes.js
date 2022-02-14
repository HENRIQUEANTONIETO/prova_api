const express = require("express");
const router = express.Router()
const ConPessoa = require('../controllers/ConPessoa')
const ConPessoaFisica = require('../controllers/ConPessoaFisica')
const ConPessoaJuridica = require('../controllers/ConPessoaJuridica')
const ConTelefone = require('../controllers/ConTelefone')

router.get('/pessoas', ConPessoa.index)
router.get('/pessoas/:id', ConPessoa.findById)
router.post('/pessoas', ConPessoa.create)
router.put('/pessoas', ConPessoa.update)
router.delete('/pessoas/:id', ConPessoa.delete)

router.get('/pessoasfisica', ConPessoaFisica.index)
router.get('/pessoasfisica/:id', ConPessoaFisica.findById)
router.post('/pessoasfisica', ConPessoaFisica.create)
router.put('/pessoasfisica', ConPessoaFisica.update)
router.delete('/pessoasfisica/:id', ConPessoaFisica.delete)

router.get('/pessoasjuridica', ConPessoaJuridica.index)
router.get('/pessoasjuridica/:id', ConPessoaJuridica.findById)
router.post('/pessoasjuridica', ConPessoaJuridica.create)
router.put('/pessoasjuridica', ConPessoaJuridica.update)
router.delete('/pessoasjuridica/:id', ConPessoaJuridica.delete)

router.get('/pessoastelefone', ConTelefone.index)
router.get('/pessoastelefone/:id', ConTelefone.findById)
router.get('/pessoastelefone/pessoa/:id', ConTelefone.findByPessoa)
router.post('/pessoastelefone', ConTelefone.create)
router.put('/pessoastelefone', ConTelefone.update)
router.delete('/pessoastelefone/:id', ConTelefone.delete)


module.exports = router