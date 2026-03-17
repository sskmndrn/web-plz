<script setup lang="ts">
const items = [
  'https://picsum.photos/468/468?random=1',
  'https://picsum.photos/468/468?random=2',
  'https://picsum.photos/468/468?random=3',
  'https://picsum.photos/468/468?random=4',
  'https://picsum.photos/468/468?random=5',
  'https://picsum.photos/468/468?random=6'
]
</script>

<template>
  <div id="top">
    <UCarousel v-slot="{ item }" loop dots arrows auto-scroll :items="items" :ui="{ item: 'basis-1/3' }">
      <img :src="item" width="234" height="234" class="rounded-lg" loading="lazy">
    </UCarousel>
    <div>

      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe voluptas error natus id alias quia, quod eveniet
        fugiat neque magnam repellendus provident, velit impedit vel earum. Illo ducimus distinctio neque aliquam non,
        facere beatae labore totam porro quas maiores quam assumenda. Est voluptate quibusdam hic quos nihil id sequi quis
        aliquam voluptatibus expedita at enim eaque maiores veritatis nostrum illo minima, ipsum non qui assumenda sint
        cumque aperiam natus? Pariatur provident officiis dolorum inventore dolore, ducimus laborum voluptatibus adipisci
        error doloremque rem sint aut nihil sed id dolor nesciunt velit nam dolores exercitationem a ullam consequuntur.
        Quae hic nulla maiores, aliquam veritatis voluptas. Ad fuga perferendis, aliquid dolores dolorem obcaecati
        accusamus facere libero cupiditate eum, maiores modi minus tempora, consectetur suscipit provident quos
        exercitationem eligendi quasi. Ratione odit nihil corporis harum temporibus. Temporibus suscipit, vel praesentium
        consectetur esse dolores dignissimos natus, ipsam reiciendis recusandae vero sint magni tempora assumenda.
        Mollitia?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur expedita labore vel similique deserunt ut,
        ullam corrupti consequuntur officiis deleniti. Placeat earum impedit asperiores totam repellendus reiciendis quam?
        Voluptates rerum esse dolor optio impedit voluptatem blanditiis, dolores cum iste molestiae alias quaerat. Ratione
        soluta voluptates hic numquam officiis labore dicta, temporibus veniam, nam accusamus aspernatur facere obcaecati
        beatae minima alias perferendis et atque? Sequi sunt ipsum velit distinctio veritatis eligendi beatae similique
        obcaecati, iste sapiente doloribus pariatur soluta deleniti autem ex! Molestiae iste provident ipsam assumenda.
        Laborum, nemo fugiat provident nulla dolor hic nam ea soluta, quidem praesentium consequatur sunt aliquam
        exercitationem repellendus perferendis incidunt. Ducimus soluta est commodi earum nihil! Vitae molestiae nobis,
        officiis adipisci dolorem id dolores iusto odit, hic aspernatur cupiditate inventore similique ex velit beatae
        autem earum fugit, iure deserunt ipsum eligendi et minima distinctio! Cum rem laborum nesciunt assumenda!
        Veritatis totam facilis quas vero cum numquam rerum et unde, ea optio delectus dignissimos accusamus repellendus
        vitae voluptatum nulla alias sequi neque est consequuntur iusto! Possimus, explicabo delectus! Odit, molestiae.
        Voluptatibus in vitae vel blanditiis cum minima excepturi aperiam provident porro veritatis! Numquam tempora
        officia dignissimos facilis doloribus quisquam repellendus sapiente labore veritatis veniam quasi, cumque sunt ea
        et perspiciatis obcaecati ipsam. Officia nisi id soluta repellat distinctio. Hic a iure quasi sit culpa iusto
        minus, facere ab in, dolores excepturi accusamus beatae quia possimus autem provident tenetur, cum ipsa ratione
        nobis est? Deserunt id dolor ex, quos voluptates recusandae ipsum, debitis cumque reiciendis eligendi ab quo
        suscipit? Non rem dolorum quisquam sed repellendus numquam consequatur cupiditate ut facilis labore, rerum unde
        quibusdam autem aperiam molestias nulla quae. Ea quos atque, amet adipisci aperiam, numquam omnis magnam
        cupiditate facere totam quasi eos natus nihil! Facilis cumque minima commodi vel culpa ullam non quaerat dicta,
        ducimus suscipit, ratione, quae officia nam nobis voluptatibus? Distinctio ex quam eos, commodi placeat,
        repellendus veritatis veniam repellat ipsum possimus minima est aliquam fugiat harum quia facilis accusamus
        doloribus. Explicabo, distinctio? Nesciunt omnis tempore quibusdam autem sequi in magnam eius id doloribus numquam
        ipsa dolorem nihil beatae eos ea eum architecto, sit consequatur natus ullam sunt! Totam mollitia suscipit earum
        aliquam eaque aspernatur beatae, cupiditate, nam voluptatum voluptas deserunt adipisci sequi tempore dolores porro
        iste quae. Pariatur aperiam iure fugiat cum amet culpa odit quibusdam, totam rerum aspernatur voluptate enim
        voluptates possimus mollitia veniam recusandae, minus nam ab quod earum sunt soluta ducimus! Voluptatem vel
        repellat vitae omnis ducimus iusto perspiciatis, unde itaque et, aliquam possimus amet sequi cumque reiciendis
        error incidunt reprehenderit consectetur dicta ipsum dolorum sunt vero non saepe ullam. Voluptatem fuga itaque
        laboriosam odio hic repellendus, ipsam mollitia nisi sed atque in et nam, perspiciatis, doloremque officia alias
        sequi laborum quisquam asperiores expedita quaerat debitis! Dolore vitae delectus exercitationem esse rerum
        aliquid magnam tenetur voluptatibus rem, molestiae nobis reprehenderit fugit expedita iusto sapiente dignissimos
        nam enim dolores voluptas doloribus laudantium quas eos deleniti blanditiis. Eligendi molestiae impedit quo
        blanditiis id, error aspernatur eos animi non obcaecati assumenda! Cum amet velit, autem enim quod a aspernatur
        quia adipisci delectus consectetur assumenda quaerat voluptatibus, officiis, laborum doloribus harum. Harum
        officiis eos dolore deserunt temporibus porro! Nulla ipsum eum eaque quam quae incidunt quidem eligendi minus, ea
        sint magnam esse exercitationem, suscipit maiores quas consectetur totam reprehenderit amet. Suscipit, ab
        laudantium nostrum consequuntur incidunt facilis quae sit! Ullam repudiandae deserunt ratione tenetur quas atque
        alias sint amet? Dignissimos, at possimus veritatis, commodi aliquam fugit impedit, cupiditate natus illum
        nesciunt unde ullam sint. At quaerat provident veritatis incidunt saepe culpa nihil sequi vero laboriosam quia,
        eligendi voluptates nobis fuga! Consequatur placeat odit molestiae totam rem tempore vero maiores aspernatur,
        accusantium, eligendi voluptate ipsam? Voluptate tempore ea blanditiis voluptatibus debitis placeat tenetur
        laborum earum, fugit fuga, illum provident repudiandae facere similique aspernatur ad architecto ullam quas iure
        quo officiis deleniti adipisci. Eaque asperiores error officia illo inventore, veritatis veniam saepe qui alias
        atque, debitis ex quam, repellat est aliquid? Quibusdam atque id deserunt, a neque nulla hic itaque incidunt
        pariatur, eveniet, rem illo. Est adipisci aliquam eius molestias quis dicta, reprehenderit amet voluptatum omnis
        repellat earum eligendi? Commodi voluptatibus obcaecati voluptatum, totam pariatur laboriosam harum est iste
        magnam earum sequi sapiente ducimus doloribus cupiditate! Nam expedita ipsa possimus animi! Facere ea dignissimos,
        dolorum adipisci consequuntur voluptatibus quibusdam laboriosam debitis, necessitatibus rerum nihil similique
        voluptate saepe corrupti a, libero deleniti perspiciatis quaerat harum nemo labore dolorem dolor ipsa mollitia?
        Soluta, debitis est ipsa laboriosam laudantium deserunt placeat, dolorum labore unde quis id molestias in dolores
        aliquam nobis officia? Deleniti non voluptate tempora aspernatur amet, placeat, in pariatur esse sed, repellat
        ipsum illum omnis quo dignissimos? Quaerat, dolorem exercitationem reiciendis ratione, incidunt magni eius sit
        molestiae doloribus nisi laboriosam numquam earum sunt consequatur impedit saepe! Distinctio, facere. Animi,
        provident debitis quia temporibus consequatur quibusdam perspiciatis ratione dolores saepe quod consectetur
        impedit adipisci magnam possimus labore! Architecto, ipsa sed aliquid cumque deleniti aliquam voluptate quod.
        Velit repellendus eius at alias obcaecati dignissimos! Neque, assumenda in libero asperiores voluptatum quis
        molestiae, dolores magnam illo provident corrupti suscipit. Labore asperiores culpa deleniti officia delectus esse
        iste sit excepturi ducimus, itaque veniam necessitatibus quia odio architecto voluptatibus velit mollitia dolor,
        impedit molestias quod! Ratione magni maxime optio rem unde sed odio quaerat totam voluptatem vitae, dolores,
        perferendis aliquid. Nesciunt debitis necessitatibus veniam veritatis! Vel sapiente maiores, facere amet quia enim
        delectus ut nulla cumque, unde ullam. Repudiandae veritatis obcaecati ratione fugiat quibusdam ducimus, vel nobis
        nam nemo amet, sint mollitia voluptatum officia quasi totam laboriosam qui doloribus optio in dignissimos
        quisquam. Nulla alias modi molestiae qui corrupti ex iste quia quas hic assumenda neque nostrum amet perferendis,
        at voluptas eaque sint eligendi aspernatur atque. Quisquam corporis obcaecati, illum aperiam adipisci pariatur
        dolore asperiores velit similique autem reprehenderit voluptatibus cupiditate voluptates praesentium commodi aut
        ex labore maiores nobis? Eius, deleniti facere, eum nulla neque ut, eveniet fugit laborum exercitationem explicabo
        est sapiente aliquid maiores quos! Exercitationem fugiat corrupti, quibusdam nesciunt at quo? In illo officiis
        impedit tenetur deleniti recusandae nostrum excepturi.</p>
    </div>
  </div>

</template>