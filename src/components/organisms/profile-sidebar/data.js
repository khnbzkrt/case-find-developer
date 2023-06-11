import Image from 'next/image';

import FileIcon from '../../../../public/images/page2/icon_filled_file.webp';
import PdfFileIcon from '../../../../public/images/page2/icon_filled_file_pdf.webp';
import JobIcon from '../../../../public/images/page2/noun_job.webp';
import DocumentPage from '../../../../public/images/page2/noun_document.webp';

export const documentItems = [
  {
    id: 1,
    text: 'eraycv.docx',
    icon: <Image src={FileIcon} width={24} height={24} alt="file" />,
  },
  {
    id: 2,
    text: 'eraycv—eng.pdf',
    icon: <Image src={PdfFileIcon} width={24} height={24} alt="pdf file" />,
  },
  {
    id: 3,
    text: 'mcpd-cert.pdf',
    icon: <Image src={PdfFileIcon} width={24} height={24} alt="pdf file" />,
  },
];

export const savedCallItems = [
  {
    id: 1,
    text: 'Neyasis Tech.',
    icon: <Image src={JobIcon} width={24} height={24} alt="neyasis tech" />,
  },
  {
    id: 2,
    text: 'Apple',
    icon: <Image src={JobIcon} width={24} height={24} alt="apple" />,
  },
];

export const applyItems = [
  {
    id: 1,
    text: 'Neyasis Tech.',
    icon: <Image src={DocumentPage} width={24} height={24} alt="apple" />,
  },
];
