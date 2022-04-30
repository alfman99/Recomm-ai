import { NextApiRequest, NextApiResponse } from "next";
import formidable from 'formidable'

const  form = formidable({ multiples:  true });

export default async function handle( req: NextApiRequest, res: NextApiResponse<any>) {
	const  contentType = req.headers['content-type']

  if (!contentType || contentType.indexOf('multipart/form-data') == -1) {
    return res.status(400).json({
      message: 'Bad Request'
    })
  }

  var form = new formidable.IncomingForm({ 
    uploadDir: 'public/casas/',
    keepExtensions: true,
    multiples: false
  });

  form.parse(req, (err, fields, files) => {
    if (err) {
      res.writeHead(err.httpCode || 400, { 'Content-Type': 'text/plain' });
      return res.end(String(err));
    }

    return res.status(200).json({
      message: 'ok',
      fileName: files.file
    });
  });

}

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};