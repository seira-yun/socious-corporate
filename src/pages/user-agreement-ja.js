import React from 'react';
import {IntlProvider} from 'react-intl';
import Seo from '../components/seo';
import '../styles/terms/index.scss';
import useSiteMetadata from '../hooks/use-site-metadata';

const UserAgreementPageJa = (props) => {
  const {
    pageContext: {messages},
  } = props;
  
  const { url } = useSiteMetadata();

  const enURL = url + "/user-agreement/"; 
  const jaURL = url + "/user-agreement-ja/"; 
      
  return (
    <IntlProvider defaultLocale="en" locale="ja" messages={messages}>
      <Seo
        title="ソーシャス利用規約"
      >
        <link rel="alternate" hreflang="en" href={ enURL } />
        <link rel="alternate" hreflang="ja" href={ jaURL } />
        <link rel="alternate" hreflang="x-default" href={ enURL } />
      </Seo>
      <div id="content">
        <div className="section">
          <span>
            ソーシャス株式会社（以下、「当社」といいます）は、より良い世界を共創することをミッションとし、ソーシャルチェンジメーカーのためのソーシャルネットワーキングサービスを本ウェブサイト及び本アプリで提供するサービス（以下、「本サービス」といいます）において提供しています。本利用規約（以下「本規約」といいます）では、本サービスの提供条件及び当社と登録ユーザーの皆様との間の権利義務関係が定められています。本サービスの利用に際しては、本規約の全文をお読みいただいたうえで、本規約に同意いただく必要があります。
          </span>
        </div>
        <div className="section">
          <span className="section-title">第１条 適用</span>
          <ol>
            <li>
              <span>
                本規約は、本サービスの提供条件及び本サービスの利用に関する当社と登録ユーザーとの間の権利義務関係を定め、登録ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されます。
              </span>
            </li>
            <li>
              <span>
                当社が本ウェブサイト上で掲載するプライバシーポリシー、コミュニティーガイドライン（これらで言及されているその他のドキュメントを含みます)
                ならびにこれらのアップデートは、本規約の一部を構成します。
              </span>
            </li>
            <li>
              <span>
                本規約の内容と、前項のルールその他の本規約外における本サービスの説明等とが異なる場合は、本規約の規定が優先して適用されるものとします。
              </span>
            </li>
            <li>
              <span>
                [登録]
                をクリックし、以下で説明する当社のサービスに登録、アクセス、利用することにより、登録ユーザーは法的拘束力のある契約を当社と結んだことに同意したものとみなされます。この契約は、ご自分のアカウントを解約して当社のサービスへのアクセスや使用を停止することにより、いつでも終了することができます。
              </span>
            </li>
          </ol>
        </div>
        <div className="section">
          <span className="section-title">第２条 定義</span>
          <br />
          <span>
            本規約において使用する以下の用語は、以下に定める意味を有するものとします。
          </span>
          <br />
          <span>
            （１）本サイト：そのドメインが「socious.io/」であり、「ソーシャス」という名称の当社が運営するウェブサイト（当社のウェブサイトのドメインまたは名称が変更された場合は、当該変更後のウェブサイトを含みます。）
          </span>
          <br />
          <span>
            （２）本アプリ：当社が提供するソーシャスという名称のアプリケーション
          </span>
          <br />
          <span>
            （３）本サービス：当社が本サイト及び本アプリ上で提供するソーシャスという名称のサービス（サービスの
            名称が変更された場合は、当該変更後のサービスを含みます。）
          </span>
          <br />
          <span>
            （４）知的財産権：著作権、特許権、実用新案権、実用新案権、意匠権、商標権その他の知的財産権（それらの権利を取得し、またはそれらの権利につき登録等を出願する権利を含みます。）
          </span>
          <br />
          <span>
            （５）登録ユーザー：本規約に定める登録手続きに基づいて本サービスの利用者としての登録がなされた個人または法人等の団体
          </span>
          <br />
          <span>
            （６）投稿データ：登録ユーザーが本サービスを利用して文章、画像、動画その他のデータを送信して他者の閲覧に提供するコンテンツ
          </span>
          <br />
          <span>
            （７）ソーシャルアクション：登録ユーザーが投稿データに対するフォロー、いいね、閲覧、コメント等をする行為
          </span>
        </div>
        <div className="section">
          <span className="section-title">第３条 登録手続き</span>
          <ol>
            <li>
              <span>
                本サービスの利用を希望する者（以下「登録希望者」といいます。）は、本規約を遵守することに同意し、かつ当社の定める一定の情報（以下「登録事項」といいます。）を当社の定める方法で当社に提供することにより、当社に対し、本サービスの利用の登録を申請することができます。
              </span>
            </li>
            <li>
              <span>
                当社は、第１項に基づいて登録申請を行った登録希望者（以下「登録申請者」といいます。）の登録の可否を判断し、当社が登録を認める場合にはその旨を登録申請者に通知します。登録申請者の登録ユーザーとしての登録は、当社が本項の通知を行ったことをもって完了したものとします。登録の可否に関する理由について、当社は、開示義務を負いません。
              </span>
            </li>
            <li>
              <span>
                前項に定める登録の完了時に、サービス利用契約が登録ユーザーと当社の
                間に成立し、登録ユーザーは本サービスを本規約に従い利用することができるようになります。
              </span>
            </li>
            <li>
              <span>
                当社は、登録申請者が、以下の各号のいずれかの事由に該当する場合は、登録及び再登録を拒否する権利を留保します。
              </span>
              <br />
              <span>
                （１）当社に提供した登録事項の全部または一部につき虚偽、誤記または記載漏れがあった場合
              </span>
              <br />
              <span>
                （２）未成年者、成年被後見人、被保佐人または被補助人のいずれかであり、法定代理人、後見人、保佐人または補助人の同意等を得ていなかった場合
              </span>
              <br />
              <span>
                （３）反社会的勢力等（暴力団、暴力団員、右翼団体、反社会的勢力、その他これに準ずる者を意味します。以下同じ。）である、または資金提供その他を通じて反社会的勢力等の維持、運営もしくは経営に協力もしくは関与する等反社会的勢力等との何らかの交流もしくは関与を行っていると当社が判断した場合
              </span>
              <br />
              <span>
                （４）過去当社との契約に違反した者またはその関係者であると当社が判断した場合
              </span>
              <br />
              <span>
                （５）過去に本規約に基づく登録抹消措置を受けたことがある場合
              </span>
              <br />
              <span>（６）その他、登録を適当でないと当社が判断した場合</span>
            </li>
          </ol>
        </div>
        <div className="section">
          <span className="section-title">第４条 本サービスの提供</span>
          <br />
          <span>
            当社は、時間帯にかかわらず本サイトを登録ユーザーの利用に供し、本サービスを提供します。ただし、事前通知による本サービスの全部または一部の提供を停止または中断する場合のほか、以下のいずれかに該当する場合には、登録
            ユーザーに事前に通知することなく、本サービスの全部または一部の提供を停止または中断することができる権利を留保します。
          </span>
          <br />
          <span>
            （１）本サービスに係るコンピューター・システムの点検または保守作業を緊急に行う場合
          </span>
          <br />
          <span>
            （２）コンピューター、通信回線等の障害、誤操作、過度なアクセスの集中、不正アクセス、ハッキング等により本サービスの運営ができなくなった場合
          </span>
          <br />
          <span>
            （３）地震、落雷、火災、風水害、停電、天災地変などの不可抗力により本サービスの運営ができなくなった場合
          </span>
          <br />
          <span>（４）その他、当社が停止または中断を必要と判断した場合</span>
        </div>
        <div className="section">
          <span className="section-title">第５条 登録ユーザーの義務</span>
          <ol>
            <li>
              <span>１．登録ユーザーは以下の事項を表明保証します。</span>
              <br />
              <span>（１）本契約を有効に締結する能力を有すること。</span>
              <br />
              <span>（２）前条４項（１）から（３）までに該当しないこと</span>
              <br />
              <span>（３）本規約を順守すること</span>
            </li>
            <li>
              <span>
                登録ユーザーは、パスワード及びユーザーIDを適切に管理及び保管する義務を負います。登録ユーザーは、パスワード及びユーザーIDを第三者に利用させ、または貸与、譲渡、名義変更、売買等をしてはいけません。
              </span>
              <br />
            </li>
            <li>
              <span>
                登録ユーザーは、ご自身の登録事項を常に最新に保つ義務を負います。
              </span>
            </li>
          </ol>
        </div>
        <div className="section">
          <span className="section-title">第６条 権利帰属</span>
          <ol>
            <li>
              <span>
                当社ウェブサイト及び本サービスに関する知的財産権は全て当社または当社にライセンスを許諾している者に帰属しており、本規約に基づく本サービスの利用許諾は、当社ウェブサイトまたは本サービスに関する当社または当社にライセンスを許諾している者の知的財産権の使用許諾を意味するものではあり
                ません。
              </span>
            </li>
            <li>
              <span>
                登録ユーザーは、投稿データについて、自らが投稿その他送信することについての適法な権利を有していること、及び投稿データが第三者の権利を侵害
                してはいけません。
              </span>
            </li>
            <li>
              <span>
                登録ユーザーは、投稿データ及びソーシャルアクションについて、当社に対し、世界的、非独占的、無償、サブライセンス可能かつ譲渡可能な使用、複製、配布、派生著作物の作成、表示及び実行に関するライセンスを付与します。また、他の登録ユーザーに対しても、本サービスを利用して登録ユーザーが投稿その他送信した投稿データの使用、複製、配布、派生著作物を作成、表示及び実行することについての非独占的なライセンスを付与します。
              </span>
            </li>
            <li>
              <span>
                登録ユーザーは、当社及び当社から権利を承継しまたは許諾された者に対して著作者人格権を行使しないことに同意するものとします。
              </span>
            </li>
          </ol>
        </div>
        <div className="section">
          <span className="section-title">第７条 有償サービス</span>
          <ol>
            <li>
              <span>
                登録ユーザーは、本サービスのうち、有償サービスについては、利用の対価として、別途当社が定め、当社ウェブサイトに表示する利用料金を、当社が指定する支払方法により当社に支払うものとします。
              </span>
            </li>
            <li>
              <span>
                対価の変更は、当社ウェブサイト上で告知することとし、過去に遡及して適用されることはありません。
              </span>
            </li>
            <li>
              <span>
                登録ユーザーが利用料金の支払を遅滞した場合、登録ユーザーは年14.6％の割合による遅延損害金を当社に支払うものとします。
              </span>
            </li>
            <li>
              <span>
                本規約に基づき、登録抹消措置がとられ、または登録ユーザーが退会手続きをとった場合、登録ユーザーは、当社に対して負っている債務の一切について当然に期限の利益を失い、直ちに当社に対して全ての債務の支払を行わなければいけません。
              </span>
            </li>
          </ol>
        </div>
        <div className="section">
          <span className="section-title">第８条 禁止事項</span>
          <br />
          <span>
            登録ユーザーは、本サービスの利用にあたり、以下の各号のいずれかに該当する行為または該当すると当社が判断する行為をしてはいけません。
          </span>
          <br />
          <span>（１）法令に違反する行為または犯罪行為に関連する行為</span>
          <br />
          <span>
            （２）当社、本サービスの他の利用者またはその他の第三者に対する詐欺または脅迫行為
          </span>
          <br />
          <span>（３）公序良俗に反する行為</span>
          <br />
          <span>
            （４）当社、本サービスの他の利用者またはその他の第三者の知的財産権、肖像権、プライバシーの権利、名誉、その他の権利または利益を侵害する行為
          </span>
          <br />
          <span>
            （５）本サービスを通じ、以下に該当し、または該当すると当社が判断する情報を当社または本サービスの他の利用者に送信すること・過度に暴力的または
            残虐な表現を含む情報・コンピューター・ウィルスその他の有害なコンピューター・プログラムを含む情報・当社、本サービスの他の利用者またはその他の
            第三者の名誉または信用を毀損する表現を含む情報・過度にわいせつな表現を
            含む情報・差別を助長する表現を含む情報・自殺、自傷行為を助長する表現を
            含む情報・薬物の不適切な利用を助長する表現を含む情報・反社会的な表現を
            含む情報・チェーンメール等の第三者への情報の拡散を求める情報・他人に不快感を与える表現を含む情報
          </span>
          <br />
          <span>
            （６）本サービスのネットワークまたはシステム等に過度な負荷をかける行為
          </span>
          <br />
          <span>
            （７）当社が提供するソフトウェアその他のシステムに対するリバースエンジニアリングその他の解析行為
          </span>
          <br />
          <span>（８）本サービスの運営を妨害するおそれのある行為</span>
          <br />
          <span>（９）当社のネットワークまたはシステム等への不正アクセス</span>
          <br />
          <span>（１０）第三者に成りすます行為</span>
          <br />
          <span>
            （１１）本サービスの他の利用者のIDまたはパスワードを利用する行為
          </span>
          <br />
          <span>
            （１２）当社、本サービスの他の利用者またはその他の第三者に不利益、損害、不快感を与える行為
          </span>
          <br />
          <span>
            （１３）当社ウェブサイト上で掲載する本サービス利用に関するコミュニティーガイドラインに抵触する行為
          </span>
          <br />
          <span>（１４）反社会的勢力等への利益供与</span>
          <br />
          <span>
            （１５）面識のない他の登録ユーザーとの性的交際を目的とした行為
          </span>
          <br />
          <span>
            （１６）前各号の行為を直接または間接に惹起し、または容易にする行為
          </span>
          <br />
          <span>（１７）前各号の行為を試みること</span>
          <br />
          <span>（１８）その他、当社が不適切と判断する行為</span>
        </div>
        <div className="section">
          <span className="section-title">第９条 登録抹消等</span>
          <br />
          <span>
            当社は、登録ユーザーが、以下の各号のいずれかの事由に該当する場合は、事前に通知または催告することなく、投稿データを削除もしくは非表示にし、当該登録ユーザーについて本サービスの全部または一部の利用を一時的に停止し、当社のサービスを使って登録ユーザーがつながりを構築する方法やコミュニケーションを図る方法を制限し、または登録ユーザーとしての登録を抹消することができます。
          </span>
          <br />
          <span>（１）本規約のいずれかの条項に違反した場合</span>
          <br />
          <span>（２）登録事項に虚偽の事実があることが判明した場合</span>
          <br />
          <span>
            （３）支払停止もしくは支払不能となり、または破産手続開始、民事再生手続
            開始、会社更生手続開始、特別清算開始若しくはこれらに類する手続の開始の申立てがあった場合
          </span>
          <br />
          <span>（４）6ヶ月以上本サービスの利用がない場合</span>
          <br />
          <span>
            （５）当社からの問い合わせその他の回答を求める連絡に対して30日間以上応答がない場合
          </span>
          <br />
          <span>（６）第3条第4項各号に該当する場合</span>
          <br />
          <span>
            （７）その他、当社が本サービスの利用または登録ユーザーとしての登録の継続を適当でないと判断した場合
          </span>
        </div>
        <div className="section">
          <span className="section-title">第１０条 退会</span>
          <br />
          <span>
            登録ユーザーは、当社所定の手続の完了により、本サービスから退会し、自己の登録ユーザーとしての登録を抹消することができます。
          </span>
        </div>
        <div className="section">
          <span className="section-title">
            第１１条 本サービスの内容の変更、終了
          </span>
          <ol>
            <li>
              <span>
                当社は、当社の都合により、本サービスの内容を変更し、または提供を終了することができます。
              </span>
            </li>
            <li>
              <span>
                当社が本サービスの提供を終了する場合、当社は登録ユーザーに事前に通知するものとします。
              </span>
            </li>
          </ol>
        </div>
        <div className="section">
          <span className="section-title">第１２条 保証の否認及び免責</span>
          <ol>
            <li>
              <span>
                当社は、本サービスが登録ユーザーの特定の目的に適合すること、期待する機能・商品的価値・正確性・有用性を有すること、登録ユーザーによる本サービスの利用が登録ユーザーに適用のある法令または業界団体の内部規則等に
                適合すること、継続的に利用できること、及び不具合が生じないことについて、明示又は黙示を問わず何ら保証するものではありません。
              </span>
            </li>
            <li>
              <span>
                当社は、本サービスに関して登録ユーザーが被った損害につき、過去1月間に登録ユーザーが当社に支払った対価の金額を超えて賠償する責任を負わないものとし、また、付随的損害、間接損害、特別損害、将来の損害及び逸失利益にかかる損害については、賠償する責任を負わないものとします。
              </span>
            </li>
            <li>
              <span>
                本サービスまたは本サイトに関連して登録ユーザーと他の登録ユーザーまたは第三者との間において生じた取引、連絡、紛争等については、登録ユーザーが自己の責任によって解決するものとします。
              </span>
            </li>
          </ol>
        </div>
        <div className="section">
          <span className="section-title">第１３条 秘密保持</span>
          <br />
          <span>
            登録ユーザーは、本サービスに関連して当社が登録ユーザーに対して秘密に取扱うことを求めて開示した非公知の情報について、当社の事前の書面による承諾がある場合を除き、秘密に取扱うものとします。
          </span>
        </div>
        <div className="section">
          <span className="section-title">第１４条 本規約等の変更</span>
          <br />
          <span>
            当社は、当社が必要と認めた場合は、本規約を変更することがあります。本契約を変更する場合、変更後の本規約の施行時期及び内容を当社ウェブサイト上での掲示その他の適切な方法により周知し、または登録ユーザーに通知します。但し、法令上登録ユーザーの同意が必要となるような内容の変更の場合は、登録ユーザーの同意を得るものとします。
          </span>
        </div>
        <div className="section">
          <span className="section-title">第１５条 通知等</span>
          <ol>
            <li>
              <span>
                登録ユーザーは当社が次の方法で通知やメッセージを提供することに同意するものとします。
              </span>
              <br />
              <span>（１）サービスを介して行う</span>
              <br />
              <span>
                （２）登録ユーザーが提供した連絡先（メールアドレス、携帯電話番号、住所など）に送信する。
              </span>
            </li>
            <li>
              <span>本規約に関する当社の連絡先は以下のとおりです。</span>
            </li>
          </ol>
        </div>
        <div className="section">
          <span className="section-title">
            第１６条 サービス利用契約上の地位の譲渡等
          </span>
          <ol>
            <li>
              <span>
                登録ユーザーは、当社の書面による事前の承諾なく、利用契約上の地位または本規約に基づく権利もしくは義務につき、第三者に対し、譲渡、移転、担保設定、その他の処分をすることはできません。
              </span>
            </li>
            <li>
              <span>
                当社は本サービスにかかる事業を他社に譲渡した場合には、当該事業譲渡
                に伴い利用契約上の地位、本規約に基づく権利及び義務並びに登録ユーザーの
                登録事項その他の顧客情報を当該事業譲渡の譲受人に譲渡することができるものとし、登録ユーザーは、かかる譲渡につき本項において予め同意したものとします。なお、本項に定める事業譲渡には、通常の事業譲渡のみならず、会社分割その他事業が移転するあらゆる場合を含むものとします。
              </span>
            </li>
          </ol>
        </div>
        <div className="section">
          <span className="section-title">第１７条 準拠法、管轄</span>
          <br />
          <span>
            当社および登録ユーザーは、両者が万が一法的紛争に至った場合、その紛争の準拠法は日本法とし、東京地方裁判所を第一審の専属的合意管轄裁判所とすることに同意します。
          </span>
        </div>
        <div className="section">
          <span className="section-title">第１８条 言語</span>
          <br />
          <span>本規約は、日本語で記載されているものがオリジナルです。</span>
        </div>
        <div className="section">
          <span>２０２1年8月19日制定</span>
        </div>
      </div>
    </IntlProvider>
  );
};

export default UserAgreementPageJa;
