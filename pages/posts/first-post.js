import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import Image from 'next/image';


export default function FirstPost() {
    return (
        <>
            <div className="frame">
            <Image
              priority
              src="/images/profile.jpg"
            //   className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
                <p className="text-2">Welcome to myED, your partner in your urgent care journey</p>
                <div className="welcom" />
                <p className="text-3">This app does not replace 111 or Healthline. If you have alife or limb threatening medical emergency, please call 111 or contactHealthline if unsure. myED is here to help you with your non-emergency medicalproblems journey.</p>
                <div className="diclaimer" />
                <button className="button">
                   LETS GET STARTED!
                </button>
            </div>
            <style jsx>{`
  .frame {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 23px 23px;
    background-color: #012942;
    width: 100%;
    height: 100%;
  }
  .img-1 {
    height: 231px;
    width: 269px;
  }
  .text-2 {
    text-align: center;
    vertical-align: top;
    font-size: 25px;
    font-family: Roboto;
    line-height: auto;
    color: #ffffff;
  }
  .welcom {
    height: 102px;
    width: 436px;
  }
  .text-3 {
    text-align: left;
    vertical-align: top;
    font-size: 16px;
    font-family: Roboto;
    line-height: auto;
    color: #ffffff;
  }
  .diclaimer {
    height: 84px;
    width: 468px;
  }
  .button {
    height: 36px;
    width: 236px;
    background-color: #ffffff;
    text-align: center;
    color: #ffffff;
  }
  .button {
    border-radius: 13px;
    background-color: #fc5b05;
  }
       `}</style>

<style jsx global>{`
        html,
        body {

            background-color: #012942;
        width: 100%;
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }

        #__next {
          width:100%;
          height: 100%;
      }
      `}</style>
        </>
    )
}


