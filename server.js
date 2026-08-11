import express from 'express'
const app = express()
const PORT = process.env.PORT || 3000
app.use(express.json())
app.get('/api/health', (_req,res)=>res.json({ok:true,service:'WAMZI MALL ONLINE API'}))
app.get('/api/products', (_req,res)=>res.json([]))
app.listen(PORT,()=>console.log(`WAMZI API running on port ${PORT}`))